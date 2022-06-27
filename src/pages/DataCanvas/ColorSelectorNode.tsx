/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { memo } from 'react';

import { Handle } from 'react-flow-renderer';

const DataTeste = memo(({ data }: any) => {
  console.log(data, 'datamemo');
  return (
    <div onClick={() => alert('oi')}>
      {/* <Handle
        type="source"
        position="left"
        style={{ background: '#555' }}
        onConnect={params => console.log('handle onConnect', params)}
        isConnectable={isConnectable}
      />
      <Handle
        type="target"
        position="left"
        style={{ bottom: 0, top: 'auto', background: 'red' }}
        onConnect={params => console.log('handle onConnect', params)}
        isConnectable={isConnectable}
      /> */}
      <div>
        <div>
          <span style={{ fontWeight: 500, fontSize: 14 }}>
            {data.title}
            <span style={{ fontWeight: 400, fontSize: 12, color: '#aaa' }}>
              (Auditable Entity)
            </span>
          </span>
          <hr />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {/* <span style={{marginTop: 2}}>Id: <span style={{ fontWeight: 'bold'}}>Int</span></span>
          <span style={{marginTop: 2}}>CreatedUTC: <span style={{fontWeight: 'bold'}}>Date</span></span>
          <span style={{marginTop: 2}}>ModifiedUTC: <span style={{fontWeight: 'bold'}}>Date</span></span>
          <span style={{marginTop: 2}}>Id: <span style={{fontWeight: 'bold'}}>Int</span></span> */}
            {data?.properties?.map((column: any) => {
              return (
                <div key={column.title}>
                  <span
                    style={{
                      marginTop: 2,
                      fontWeight: 400,
                      fontSize: 12,
                      color: '#aaa',
                    }}
                  >
                    {column.title}:{' '}
                    <span
                      style={{ fontWeight: 400, fontSize: 12, color: '#001' }}
                    >
                      {column.type}
                    </span>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* <Handle
        type="source"
        position="right"
        id="a"
        style={{ top: 10, background: '#555' }}
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position="right"
        id="b"
        style={{ bottom: 10, top: 'auto', background: '#555' }}
        isConnectable={isConnectable}
      /> */}
    </div>
  );
});

export default DataTeste;
