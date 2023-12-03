import React from 'react';
import Tree from 'react-d3-tree';

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

export default function OrgChartTree() {
  return (
    // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
    <div id="treeWrapper" style={{ width: '119em', height: '58em' }}>
      <Tree zoom={0.6} depthFactor={-150} separation={ {nonSiblings: 1.3, siblings: 1 }} translate={{x: 900, y:900}} orientation={"vertical"} data={orgChart} />
    </div>
  );
}
