import React, { useEffect, useMemo, useState } from 'react';
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
  // Divider3,
} from './styles';

// const nodeTypes = {
//   selectorNode: CardsAuditableEntityPage,
//   teste: ,
// };

const initBgColor = '#1A192B';
const DataCanvasPage = () => {
  const nodeReducer = useAppSelector(
    state => state.solutions.activeWorkSpace.nodes,
  );

  const [nodes, setNodes, onNodesChange] = useNodesState(nodeReducer);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [bgColor, setBgColor] = useState(initBgColor);

  useEffect(() => {
    setNodes(nodes1);
  }, [nodes1, setNodes]);

  const nodeTypes = useMemo(
    () => ({
      customNode: CardsAuditableEntityPage,
    }),
    [],
  );

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
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        style={{ width: 1248, height: 600 }}
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
