import { EllipsisOutlined, PlusCircleFilled } from '@ant-design/icons';
import { Button, Dropdown, Menu } from 'antd';
import React, { useEffect } from 'react';
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  MiniMap,
  Controls,
  Position,
} from 'react-flow-renderer';
import { useAppSelector } from '../../store/reduxHooks';
import DataTeste from './ColorSelectorNode';
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

const nodeTypes = {
  selectorNode: DataTeste,
};

const DataCanvasPage = () => {
  const nodes1 = useAppSelector(state => state.solutions.activeWorkSpace.nodes);
  const currentSelection = useAppSelector(
    state => state.solutions.activeWorkSpace.currentSelection,
  );

  const [nodes, setNodes, onNodesChange] = useNodesState(nodes1);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    setNodes(nodes1);
  }, [nodes1, setNodes]);

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

    // setNodes([
    //   {
    //     id: 'dbi-1',
    //     type: 'input',
    //     data: {
    //       elementType: 'dbInstance',
    //       title: 'PostgreSqlInstance',
    //       type: 'PostgreSql',
    //       isRelationalDb: true,
    //     },
    //     position: {
    //       x: 0,
    //       y: 50,
    //     },
    //     sourcePosition: Position.Right,
    //   },
    //   {
    //     id: 'dbi-2',
    //     type: 'input',
    //     data: {
    //       elementType: 'dbInstance',
    //       title: 'SqlServerInstance',
    //       type: 'SqlServer',
    //       isRelationalDb: true,
    //     },
    //     position: {
    //       x: 0,
    //       y: 50,
    //     },
    //     sourcePosition: 'right',
    //   },
    // ]);

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
  const menu = (
    <Menu
      onClick={() => console.log('click')}
      items={[
        {
          label: 'Add entity',
          key: '2',
          icon: <PlusCircleFilled />,
        },
      ]}
    />
  );
  return (
    <DataCanvas>
      <ButtonWrapper>
        <Dropdown.Button overlay={menu} className="icon-rotate">
          {currentSelection?.title}
        </Dropdown.Button>
      </ButtonWrapper>
      <ReactFlowWrapper>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          // onConnect={onConnect}

          nodeTypes={nodeTypes}
          // connectionLineStyle={connectionLineStyle}
          snapToGrid
          snapGrid={[20, 20]}
          defaultZoom={1.5}
          fitView
          attributionPosition="bottom-left"
        >
          <Controls />
        </ReactFlow>
      </ReactFlowWrapper>

      {/* <MiniMap
          nodeStrokeColor={n => {
            if (n.type === 'input') return '#0041d0';
            if (n.type === 'selectorNode') return bgColor;
            if (n.type === 'output') return '#ff0072';
          }}
          nodeColor={n => {
            if (n.type === 'selectorNode') return bgColor;
            return '#fff';
          }}
        /> */}

      {/* <CardCreatingAStructure>
        <VectorFrame>
          <CreatingAStructureVector />
        </VectorFrame>
        <CreatingaStructure>Creating a Structure</CreatingaStructure>
        <Asolutionneedsainstance>
          A solution needs a instance.
        </Asolutionneedsainstance>
        <HandleNewInstance type="primary">New instance</HandleNewInstance>
      </CardCreatingAStructure>
      <MenuGroup2>
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
            <Divider3 />
          </CollapseItem>
        </CollapseProperties>
      </MenuGroup2> */}
    </DataCanvas>
  );
};

export default DataCanvasPage;
