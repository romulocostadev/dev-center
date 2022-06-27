import * as React from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import { FolderOpenOutlined, FolderOutlined } from '@ant-design/icons';

interface RenderTree {
  id: string;
  name: string;
  children?: readonly RenderTree[];
}

const data = [
  {
    id: '1',
    name: 'SunChemical',
    children: [
      {
        id: '2',
        name: 'Database',
        nodes: [
          {
            id: 1,
            databaseName: 'foo',
          },
        ],
        children: [
          {
            id: '3',
            name: 'DbInstanse',
            children: [
              {
                id: '4',
                name: 'PostgreSQL',
                children: [
                  {
                    id: '5',
                    name: 'Customer',
                    children: [
                      {
                        id: '6',
                        name: 'Customer',
                      },
                      {
                        id: '7',
                        name: 'Address',
                      },
                      {
                        id: '8',
                        name: 'MetaData',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

// const foo = (children: any) => {
//   return (
//     <div>
//       <h1>Teste</h1>
//       {children}
//     </div>
//   );
// };

export default function RichObjectTreeView() {
  const renderTree = (nodes: any) => {
    return nodes.map((node: any) => {
      const { id, name, children } = node;
      return (
        <TreeItem
          key={id}
          nodeId={id}
          label={name}
          onClick={() => {
            console.log('clicked');
          }}
          icon={!children && 't'}
        >
          {children && children.length > 0 && renderTree(children)}
        </TreeItem>
      );
    });
  };

  function findObject(data: any, id: string): any {
    for (const item of data) {
      if (item.id === id) {
        return item;
      }

      if (item.children) {
        const child = findObject(item?.children, id);
        if (child) {
          return child;
        }
      }
    }
  }

  const Teste = (id: string) => {
    const test = findObject(data, id);
    console.log(test);
  };
  return (
    <TreeView
      aria-label="rich object"
      defaultCollapseIcon={<FolderOpenOutlined style={{ fontSize: '2px' }} />}
      defaultExpanded={['root']}
      defaultExpandIcon={<FolderOutlined />}
      sx={{ height: '100%', flexGrow: 1, maxWidth: 200, overflowY: 'auto' }}
      onNodeToggle={(ev: any, value: any) => console.log(ev, value)}
      onNodeSelect={(ev: any, value: any) => Teste(value)}
    >
      {renderTree(data)}
    </TreeView>
  );
}
