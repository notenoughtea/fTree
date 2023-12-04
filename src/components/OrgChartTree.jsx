import React from 'react';
import Tree from 'react-d3-tree';
import './module.style.css'
import node from '../assets/node.svg'

// This is a simplified example of an org chart with a depth of 2.
// Note how deeper levels are defined recursively via the `children` property.
const orgChart = {
  name: 'Бора',
  children: [
    {
      name: 'Боронай',
    children: [
      {
        name: 'Къашык',
      children: [
        {
          name: 'Ибрагим',
        children: [
          {
            name: 'Къаплан',
          children: [
            {
              name: 'Туган',
            children: [
              {
                name: 'Зубеир',
              children: [
                
              {
                name: 'Шамиль',
              children: [
                
                ],
              },
              {
                name: 'Тамара',
              children: [
              {
                name: 'Ислам',
              },
                ],
              },
                ],
              },
              {
                name: 'Ибрагим',
              children: [
                
              {
                name: 'Айшат',
              children: [
                
              {
                name: 'Магомед',
              },  
              {
                name: 'Супият',
              },  
                ],
              },   
              {
                name: 'Асият',
                children: [
                
              {
                name: 'Роза',
                children: [
                
                ],
              },   
              {
                name: 'Любовь',
                children: [
                
                ],
              },   
              {
                name: 'Белла',
                children: [
                
                ],
              },   
                ],
              },   
              {
                name: 'Фарида',
              children: [
                  
              {
                name: 'Анзор',
              children: [
                
                ],
              },     
              {
                name: 'Науруз',
              children: [
                
                ],
              },     
              {
                name: 'Хаджи-Мурат',
              children: [
                
                ],
              },   
                ],
              },   
              {
                name: 'Джашарбек',
              children: [
                 
              {
                name: 'Магомед',
              children: [
                
                ],
              },    
              {
                name: 'Альбина',
              children: [
                
                ],
              },   
                ],
              },   
              {
                name: 'Бородин',
                children: [
                  
              {
                name: 'Лейля',
                children: [
                  
                ],
              },   
              {
                name: 'Мурат',
                children: [
                  
                ],
              },   
              {
                name: 'Сапарбий',
                children: [
                  
                ],
              },   
                ],
              },   
                ],
              },              {
                name: 'Амин',
              children: [
                {
                  name: 'Эльбрус',
                children: [
                  {
                    name: 'Алина',
                  children: [
                    
                    ],
                  },
                  ],
                },
                {
                  name: 'Казбек',
                children: [
                  {
                    name: 'Тимур',
                  children: [
                    
                    ],
                  },       
                    {
                    name: 'Лейла',
                  children: [
                    
                    ],
                  },
                  ],
                },
                {
                  name: 'Белла',
                children: [
                  {
                    name: 'Руслан',
                  children: [
                    
                    ],
                  },
                  {
                    name: 'Амина',
                  children: [
                    
                    ],
                  },
                  ],
                },
                ],
              },              
              {
                name: 'Ахмадья',
              children: [
                {
                  name: 'Марджан',
                },
                {
                  name: 'Тауджан',
                },
                {
                  name: 'Рамазан',
                children: [
                  {
                    name: 'Алан',
                  children: [
                    
                    ],
                  },
                  {
                    name: 'Алина',
                  children: [
                    
                    ],
                  },
                  ],
                },
                {
                  name: 'Халит',
                children: [
                  
                {
                  name: 'Элен',
                children: [
                  
                  ],
                },
                {
                  name: 'Алим',
                children: [
                  
                  ],
                },
                  ],
                },
                ],
              },              {
                name: 'Мухамадья',
              children: [
                
                ],
              },             
               {
                name: 'Акътамакъ',
              children: [
                {
                  name: 'Сулахат',
                children: [
                  
                {
                  name: 'Гульнара',
                children: [
                  
                  ],
                },   
                {
                  name: 'Малик',
                children: [
                  
                  ],
                },   
                  ],
                },            
                {
                  name: 'Фатима',
                children: [
                  
                  ],
                }, 
                ],
              }, 
              {
                name: 'Кемисхан',
              children: [
                
              {
                name: 'Люда',
              children: [
                
                ],
              },     
              {
                name: 'Кулина',
              children: [
                
              {
                name: 'Таулан',
              children: [
                
                ],
              },     
              {
                name: 'Люда',
              children: [
                
                ],
              },     
              {
                name: 'Хаджи-Мурат',
              children: [
                
                ],
              },     
                ],
              },     
              {
                name: 'Фатима',
              children: [
                
              {
                name: 'Алибек',
              children: [
                
                ],
              },     
                ],
              },     
              {
                name: 'Тамара',
              children: [
                
              {
                name: 'Али',
              children: [
                
                ],
              },     
              {
                name: 'Алим',
              children: [
                
                ],
              },     
              {
                name: 'Асият',
              children: [
                
                ],
              },   
              {
                name: 'Рустам',
              children: [
                
                ],
              },       
                ],
              },     
              {
                name: 'Светлана',
              children: [
                
                ],
              },     
              {
                name: 'Роза',
              children: [
                
                ],
              },     
                ],
              },               
              ],
            }
            ],
          }
          ],
        }
        ],
      }
      ],
    }
  ],
};

const renderRectSvgNode = ({ nodeDatum, toggleNode }) => (
  <g>
      <image onClick={toggleNode} style={{fill: 'red', stroke: "red", strokeWidth: 2}} x="-25" y="-22" width="50" height="50" preserveAspectRatio="none" xlinkHref="data:image/png;base64,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"/>
<text fill="black" strokeWidth="1" x="30">
      {nodeDatum.name}
    </text>
    {nodeDatum.attributes?.department && (
      <text fill="black" x="20" dy="20" strokeWidth="1">
        Department: {nodeDatum.attributes?.department}
      </text>
    )}
  </g>
);

export default function OrgChartTree() {
  return (
    // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
    <div id="treeWrapper" style={{ width: '119em', height: '58em' }}>
      <Tree 

      zoom={0.6} 
      depthFactor={-150} 
      separation={ {nonSiblings: 1.3, siblings: 1 }} 
      translate={{x: 900, y:900}} 
      orientation={"vertical"}
      renderCustomNodeElement={renderRectSvgNode} 
      data={orgChart} />
    </div>
  );
}
