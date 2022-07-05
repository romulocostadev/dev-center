/* eslint-disable consistent-return */
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import ReactFlow, {
  useNodesState,
  useEdgesState,
  MiniMap,
  Controls,
  ReactFlowProvider,
} from 'react-flow-renderer';
import { t } from 'i18next';
import CardsAuditableEntityPage from '../../components/CardsAuditableEntity';
import { useAppDispatch, useAppSelector } from '../../store/reduxHooks';
import {
  DataCanvas,
  ButtonWrapper,
  ReactFlowWrapper,
  // Divider3,
} from './styles';
import { setModalData } from '../../store/modal/modalSlice';
import ModalNewDatabase from '../../components/ModalNewDatabase';
import DataCanvasDatabasePage from '../DataCanvasDatabase';
import NewEntityPage from '../NewEntityPage';
import ModalNewEntity from '../../components/ModalNewEntity';

// const nodeTypes = {
//   selectorNode: CardsAuditableEntityPage,
//   teste: ,
// };
import PropertiesMenu from '../../components/PropertiesMenu';
import ModalNewDbInstance from '../../components/ModalNewDbInstance';
import { PathType } from '../../services/factories/common';
import { updateCurrent } from '../../store/solution/solutionSlice';
import useWorkspace from '../../hooks/useWorkspace';

const initBgColor = '#1A192B';
const DataCanvasPage = () => {
  const dispatch = useAppDispatch();
  const [setCurrent] = useWorkspace();

  const properties = useAppSelector(
    state => state.solutions.activeWorkSpace.properties,
  );

  const activeWorkSpace = useAppSelector(
    state => state.solutions.activeWorkSpace,
  );

  const nodeReducer = useAppSelector(
    state => state.solutions.activeWorkSpace.nodes,
  );

  const solution = useAppSelector(state => state.solutions.solution);

  const [nodes, setNodes, onNodesChange] = useNodesState(nodeReducer);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [bgColor, setBgColor] = useState(initBgColor);

  useEffect(() => {
    console.log('oi');
    setNodes(nodeReducer);
  }, [nodeReducer, setNodes]);

  const nodeTypes = useMemo(
    () => ({
      customNode: CardsAuditableEntityPage,
    }),
    [],
  );

  const getButtonTitle = (elementType: string) => {
    switch (elementType) {
      case 'solution-folder':
      case 'database-folder':
      case 'dbinstance-folder':
        return 'Create DbInstance';
      case 'database':
        return 'Create entity';
      case 'database-instance':
        return 'Create database';
      default:
        return 'Add';
    }
  };

  useEffect(() => {
    console.log('useeffect');
    const onChange = (event: any) => {
      setNodes(nds =>
        nds.map(node => {
          if (node.id !== '2') {
            return node;
          }

          const color = event.target.value;

          // setBgColor(color);

          return {
            ...node,
            data: {
              ...node.data,
              color,
            },
          };
        }),
      );
    };

    setEdges([
      {
        id: 'e1-2',
        source: '1',
        target: '2',
        // animated: true,
        style: { stroke: '#000' },
      },
      {
        id: 'e2a-3',
        source: '2',
        target: '3',
        sourceHandle: 'a',
        // animated: true,
        style: { stroke: '#000' },
      },
      {
        id: 'e2b-4',
        source: '2',
        target: '4',
        sourceHandle: 'b',
        // animated: true,
        style: { stroke: '#000' },
      },
    ]);
  }, []);

  const handleClickButtonCreate = () => {
    switch (activeWorkSpace?.current?.pathType) {
      case 'database':
        dispatch(
          setModalData({
            visible: true,
            title: t('modal-new-entity'),
            content: <ModalNewEntity />,
          }),
        );
        break;
      case 'database-instance':
        dispatch(
          setModalData({
            visible: true,
            title: t('modal-new-database'),
            content: <ModalNewDatabase />,
          }),
        );
        break;
      default:
        dispatch(
          setModalData({
            visible: true,
            title: t('modal-new-dbinstance'),
            content: <ModalNewDbInstance />,
          }),
        );
        break;
    }
  };

  // const handleOnSelect = (event, node) => {};

  const handleOnSelect = useCallback((event, node) => {
    setCurrent(node.id, solution);
  }, []);

  return (
    <DataCanvas>
      <ReactFlowProvider>
        <ReactFlowWrapper>
          {nodes?.length > 0 && (
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onNodeClick={handleOnSelect}
              nodeTypes={nodeTypes}
              snapToGrid
              snapGrid={[20, 20]}
              defaultZoom={1.5}
              fitView
              elementsSelectable
              attributionPosition="bottom-left"
            >
              <MiniMap
                nodeStrokeColor={(n: any) => {
                  if (n.type === 'input') return '#0041d0';
                  if (n.type === 'selectorNode') return bgColor;
                  if (n.type === 'output') return '#ff0072';
                }}
                nodeColor={n => {
                  if (n.type === 'selectorNode') return bgColor;
                  return '#fff';
                }}
              />
              <Controls />
            </ReactFlow>
          )}
          {(!nodes ||
            (nodes?.length === 0 &&
              activeWorkSpace?.current?.pathType != PathType.Entity)) && (
            <DataCanvasDatabasePage />
          )}
          <ButtonWrapper>
            {nodes && activeWorkSpace?.current?.pathType != PathType.Entity && (
              <Button
                icon={<PlusCircleOutlined />}
                onClick={handleClickButtonCreate}
              >
                {getButtonTitle(activeWorkSpace?.current?.pathType)}
              </Button>
            )}
          </ButtonWrapper>
        </ReactFlowWrapper>
      </ReactFlowProvider>
      {/* <CardCreatingAStructure>
        <VectorFrame>
          <CreatingAStructureVector />
        </VectorFrame>
        <CreatingaStructure>Creating a Structure</CreatingaStructure>
        <Asolutionneedsainstance>
          A solution needs a instance.
        </Asolutionneedsainstance>
        <HandleNewInstance type="primary">New instance</HandleNewInstance>
      </CardCreatingAStructure> */}
      <PropertiesMenu />
    </DataCanvas>
  );
};

export default DataCanvasPage;
