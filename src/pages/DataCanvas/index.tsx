import React, { useEffect, useMemo, useState } from 'react';
import {
  EllipsisOutlined,
  PlusCircleFilled,
  PlusCircleOutlined,
} from '@ant-design/icons';
import { Button, Dropdown, Menu } from 'antd';
import ReactFlow, {
  useNodesState,
  useEdgesState,
  MiniMap,
  Controls,
} from 'react-flow-renderer';
import CardsAuditableEntityPage from '../../components/CardsAuditableEntity';
import { useAppSelector } from '../../store/reduxHooks';
import {
  DataCanvas,
  CardCreatingAStructure,
  VectorFrame,
  CreatingAStructureVector,
  CreatingaStructure,
  Asolutionneedsainstance,
  HandleNewInstance,
  MenuGroup2,
  CollapseProperties,
  CollapseItem,
  CollapseHead,
  DownOutlinedIcon,
  Properties,
  MenuOutlinedIcon,
  Divider2,
  CollapseBody,
  Input3,
  InputBasic3,
  Prefix,
  Input,
  ButtonWrapper,
  ReactFlowWrapper,
  // Divider3,
} from './styles';

// const nodeTypes = {
//   selectorNode: CardsAuditableEntityPage,
//   teste: ,
// };

const initBgColor = '#1A192B';
const DataCanvasPage = () => {
  const properties = useAppSelector(
    state => state.solutions.activeWorkSpace.properties,
  );

  const nodeReducer = useAppSelector(
    state => state.solutions.activeWorkSpace.nodes,
  );

  const currentSelection = useAppSelector(
    state => state.solutions.activeWorkSpace.currentSelection,
  );

  const [nodes, setNodes, onNodesChange] = useNodesState(nodeReducer);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [bgColor, setBgColor] = useState(initBgColor);

  useEffect(() => {
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
      case 'database':
        return 'Create instance';
      case 'dbInstance':
        return 'Create database';
      default:
        return 'Add';
    }
  };

  useEffect(() => {
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
  return (
    <DataCanvas>
      <ButtonWrapper>
        {properties && properties?.elementType !== 'entity' && (
          <Button icon={<PlusCircleOutlined />}>
            {getButtonTitle(properties?.elementType)}
          </Button>
        )}
      </ButtonWrapper>
      <ReactFlowWrapper>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodeTypes={nodeTypes}
          snapToGrid
          snapGrid={[20, 20]}
          defaultZoom={1.5}
          fitView
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
      </ReactFlowWrapper>
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
      {/* <MenuGroup2>
        <CollapseProperties>
          <CollapseItem>
            <CollapseHead>
              <DownOutlinedIcon />
              <Properties>Properties</Properties>
              <MenuOutlinedIcon />
            </CollapseHead>
            <Divider2 />
            <CollapseBody>
              <Input3>
                <InputBasic3>
                  <Prefix>Name:</Prefix>
                  <Input>SunChemical</Input>
                </InputBasic3>
              </Input3>
            </CollapseBody>
          </CollapseItem>
        </CollapseProperties>
      </MenuGroup2> */}
    </DataCanvas>
  );
};

export default DataCanvasPage;
