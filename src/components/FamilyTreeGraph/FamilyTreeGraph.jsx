import React from 'react';
import Tree from 'react-d3-tree';
import styles from './styles.module.css'
import MemberCard from '../MemberCard/MemberCard/MemberCard';

// This is a simplified example of an org chart with a depth of 2.
// Note how deeper levels are defined recursively via the `children` property.
const familyData = {
  name: 'Бора', gender: 'male', birthdate: 2000,
  children: [
    {
      name: 'Боронай', gender: 'male', birthdate: 2000,
      children: [
        {
          name: 'Къашык', gender: 'male', birthdate: 2000,
          children: [
            {
              name: 'Ибрагим', gender: 'male', birthdate: 2000,
              children: [
                {
                  name: 'Къаплан', gender: 'male', birthdate: 2000,
                  children: [
                    {
                      name: 'Туган', gender: 'male', birthdate: 2000,
                      children: [
                        {
                          name: 'Зубеир', gender: 'male', birthdate: 2000,
                          children: [

                            {
                              name: 'Шамиль', gender: 'male', birthdate: 2000,
                              children: [

                              ],
                            },
                            {
                              name: 'Тамара', gender: 'female', birthdate: 2000,
                              children: [
                                {
                                  name: 'Ислам', gender: 'male', birthdate: 2000,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          name: 'Ибрагим', gender: 'male', birthdate: 2000,
                          children: [

                            {
                              name: 'Айшат', gender: 'female', birthdate: 2000,
                              children: [

                                {
                                  name: 'Магомед', gender: 'male', birthdate: 2000,
                                },
                                {
                                  name: 'Супият', gender: 'female', birthdate: 2000,
                                },
                              ],
                            },
                            {
                              name: 'Асият', gender: 'female', birthdate: 2000,
                              children: [

                                {
                                  name: 'Роза', gender: 'female', birthdate: 2000,
                                  children: [

                                  ],
                                },
                                {
                                  name: 'Любовь', gender: 'female', birthdate: 2000,
                                  children: [

                                  ],
                                },
                                {
                                  name: 'Белла', gender: 'female', birthdate: 2000,
                                  children: [

                                  ],
                                },
                              ],
                            },
                            {
                              name: 'Фарида', gender: 'female', birthdate: 2000,
                              children: [

                                {
                                  name: 'Анзор', gender: 'male', birthdate: 2000,
                                  children: [

                                  ],
                                },
                                {
                                  name: 'Науруз', gender: 'male', birthdate: 2000,
                                  children: [

                                  ],
                                },
                                {
                                  name: 'Хаджи-Мурат', gender: 'male', birthdate: 2000,
                                  children: [

                                  ],
                                },
                              ],
                            },
                            {
                              name: 'Джашарбек', gender: 'male', birthdate: 2000,
                              children: [

                                {
                                  name: 'Магомед', gender: 'male', birthdate: 2000,
                                  children: [

                                  ],
                                },
                                {
                                  name: 'Альбина', gender: 'female', birthdate: 2000,
                                  children: [

                                  ],
                                },
                              ],
                            },
                            {
                              name: 'Бородин', gender: 'male', birthdate: 2000,
                              children: [

                                {
                                  name: 'Лейля', gender: 'female', birthdate: 2000,
                                  children: [

                                  ],
                                },
                                {
                                  name: 'Мурат', gender: 'male', birthdate: 2000,
                                  children: [

                                  ],
                                },
                                {
                                  name: 'Сапарбий', gender: 'male', birthdate: 2000,
                                  children: [

                                  ],
                                },
                              ],
                            },
                          ],
                        }, {
                          name: 'Амин', gender: 'male', birthdate: 2000,
                          children: [
                            {
                              name: 'Эльбрус', gender: 'male', birthdate: 2000,
                              children: [
                                {
                                  name: 'Алина', gender: 'female', birthdate: 2000,
                                  children: [

                                  ],
                                },
                              ],
                            },
                            {
                              name: 'Казбек', gender: 'male', birthdate: 2000,
                              children: [
                                {
                                  name: 'Тимур', gender: 'male', birthdate: 2000,
                                  children: [

                                  ],
                                },
                                {
                                  name: 'Лейла', gender: 'female', birthdate: 2000,
                                  children: [

                                  ],
                                },
                              ],
                            },
                            {
                              name: 'Белла', gender: 'female', birthdate: 2000,
                              children: [
                                {
                                  name: 'Руслан', gender: 'male', birthdate: 2000,
                                  children: [

                                  ],
                                },
                                {
                                  name: 'Амина', gender: 'female', birthdate: 2000,
                                  children: [

                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          name: 'Ахмадья', gender: 'male', birthdate: 2000,
                          children: [
                            {
                              name: 'Марджан', gender: 'female', birthdate: 2000,
                            },
                            {
                              name: 'Тауджан', gender: 'female', birthdate: 2000,
                            },
                            {
                              name: 'Рамазан', gender: 'male', birthdate: 2000,
                              children: [
                                {
                                  name: 'Алан', gender: 'male', birthdate: 2000,
                                  children: [

                                  ],
                                },
                                {
                                  name: 'Алина', gender: 'female', birthdate: 2000,
                                  children: [

                                  ],
                                },
                              ],
                            },
                            {
                              name: 'Халит', gender: 'male', birthdate: 2000,
                              children: [

                                {
                                  name: 'Элен', gender: 'female', birthdate: 2000,
                                  children: [


                                    {
                                      name: 'Ибрагим', gender: 'male', birthdate: 2000,
                                      children: [
    
                                      ],
                                    },
                                  ],
                                },
                                {
                                  name: 'Алим', gender: 'male', birthdate: 2000,
                                  children: [

                                  ],
                                },
                              ],
                            },
                          ],
                        }, {
                          name: 'Мухамадья', gender: 'male', birthdate: 2000,
                          children: [

                          ],
                        },
                        {
                          name: 'Акътамакъ', gender: 'female', birthdate: 2000,
                          children: [
                            {
                              name: 'Сулахат', gender: 'female', birthdate: 2000,
                              children: [

                                {
                                  name: 'Гульнара', gender: 'female', birthdate: 2000,
                                  children: [

                                  ],
                                },
                                {
                                  name: 'Малик', gender: 'male', birthdate: 2000,
                                  children: [

                                  ],
                                },
                              ],
                            },
                            {
                              name: 'Фатима', gender: 'female', birthdate: 2000,
                              children: [

                              ],
                            },
                          ],
                        },
                        {
                          name: 'Кемисхан', gender: 'female', birthdate: 2000,
                          children: [

                            {
                              name: 'Люда', gender: 'female', birthdate: 2000,
                              children: [

                              ],
                            },
                            {
                              name: 'Кулина', gender: 'female', birthdate: 2000,
                              children: [

                                {
                                  name: 'Таулан', gender: 'male', birthdate: 2000,
                                  children: [

                                  ],
                                },
                                {
                                  name: 'Лейла', gender: 'female', birthdate: 2000,
                                  children: [

                                  ],
                                },
                                {
                                  name: 'Хаджи-Мурат', gender: 'male', birthdate: 2000,
                                  children: [

                                  ],
                                },
                              ],
                            },
                            {
                              name: 'Фатима', gender: 'female', birthdate: 2000,
                              children: [

                                {
                                  name: 'Алибек', gender: 'male', birthdate: 2000,
                                  children: [

                                  ],
                                },
                              ],
                            },
                            {
                              name: 'Тамара', gender: 'female', birthdate: 2000,
                              children: [

                                {
                                  name: 'Али', gender: 'male', birthdate: 2000,
                                  children: [

                                  ],
                                },
                                {
                                  name: 'Алим', gender: 'male', birthdate: 2000,
                                  children: [

                                  ],
                                },
                                {
                                  name: 'Асият', gender: 'female', birthdate: 2000,
                                  children: [

                                  ],
                                },
                                {
                                  name: 'Рустам', gender: 'male', birthdate: 2000,
                                  children: [

                                  ],
                                },
                              ],
                            },
                            {
                              name: 'Светлана', gender: 'female', birthdate: 2000,
                              children: [

                              ],
                            },
                            {
                              name: 'Роза', gender: 'female', birthdate: 2000,
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

// Иконка-портрет с кнопкой для управления раскрытием узла
// const renderRectSvgNode = ({ nodeDatum, toggleNode }) => (
//   <g>
//       <image onClick={toggleNode} style={{fill: 'red', stroke: "red", strokeWidth: 2}} x="-25" y="-22" width="50" height="50" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAHfElEQVR4nO2Ze1BU1x3Hf7vssnt37717791lV5aFZZeXFBYWeYgiio+IAdHiixQYbFALChIVEB9BQuKj0KS+UEAF2qQxmlGjxqTpxNY0dRwT09G2GqtttdPapo4dlEcIAfHXuVvMEFH23DWBTsffzPefvfee3/dzzz3nd85ZgCfxJIY9vAAgGAAmA0AmAMx/QOkAkAQAEQBgAQAa/gfCR65QVNAcd9FLoehl9YYOW6TjduSE5DsJaentSZlz2uJSZ3REJk/sDIkZ02YOCmozmP3atDrd50qVqkcmk6GXl9ddb7W6677EdmQyGQ6U+Ju3St2l1mpvMTx/CgByAUD+OMa9VBT1koqiPk/KnPtFWctr2Pj7y9hy9bpHavzdp1h37oJL9ecvDrq+9+IV17XaX32IS7fVYUhsXIdWp7sEAIGemGc1NPNRaHxC58unTnts+nGVvb6yT63V3gAAgxTzCg3D/CZ5/oIvmv/4lxEz39KvqTl5X2pZ9jC5e4WiNCQ2rrPp8p9H3HzL1evYcOESUlq6CwDCSPyrVBTVvvm9kyNuvGWAUr+f36NQKCpJADLtzpi2kTbc8oBKm36KDC+cc+terdE0zC4uuTfShlseUM37H6CGZf/lFoDh+Y+X7270ONHW02dxVkEhjnZE4ijfUcjxHAbYAjE+ZRJ+b+3zWHfuvEftbj9zDtUaTbtbAJrjr71w9IRHSUrq96IgcFie8zSe2V2Ofz+0Gf9x5Id4tn41HqhahLlPJ6HeoMfn3zwiue0dZ3+LKjXV4RZAy7I3Nv38fckJqo4cR4Oex0/2rMG7p3Y9Uu/WFqNBL6DUl/Ti8XeR5rjr7scATd+sOfmBpMabLv8JA+w211seyvx9vV6Zj/awUNdzpDlWNDYhIwin3feATve3jSd+IQlgxZ4mjI8KIzJ/X9MSozC3soo4R+6GaqQYZp9bAIbnL68/eFgSwJR583B7yQJJAB83VqDZ34KklT5tcUEvAKxxD6DXf1Ta/KokgPBoB364s1QSgCjHaDuu+dkBohxjZ2aIA/hZ9wCC8J64EpQCYBxlxOsHN0oGWJeXhrOXFRPlCItPuNO/1xg6KJpuzq2qlgTAcTq8eaxWMsA7NUUYO2E8UQ5LaNhtABjvFgBksurZxSV9UgB4nsPP3qqRDHDp1Q3obw0gymEKsIo94HQPAFCUkpXdJQXA5Gvy6BO6eawW9QaBrJdNpnbS1WiWc8q0O1IAxLf46WtVkgE+e6vG1XskOcRtLAAEkQBMtUc7W6UA2EOD8XzTOskAf/hJJQYG2ch6wOjqgRASAKfRP+C2FICImGiPptGjmwoxbmIyUQ69r7kNAMJJAPxpjuuQApA0IxXfIFxGDFRZdirOKVlBNs6sgeIgHkMCoFF4e/dKAZjz3Epc+cx0yQDhwVYkrfr2KKc4jU4hAZDJ5fJ7UleitgAzfvnLncTmT9eVoV+ABZuvXCPK4Zg4SeyBuUQAMplM8o4sMj4Oty4nXw+ljndinoSCmZQ5txMAfkAC4O3l5UVUyMSFWPGuBoyckoJqlkYtq8U3X1zs1vzxLUtRLpejeFBGCpCxrKhPLpdvIAEwi0eC7hos2rEb9VZ/NETYMbj8u5hwaDVG7y5A3lfAkqxp2PrOKw81f3V/NQp6HVqyk5G1+mLIuASicZBT+YK4nN5DAuA0BgTcGWpzPXr8OOSCLPidLbmYeGL91xS3fyUGzoxHXs9iWU6qa3q9dfxHrkq9d3UOCgYdBi9P/+/9b6/D4FWzUOPD46TsbNfR46PyFm7dgTTPv00CkBEyJvahdaB4Vz1qBQ5tS6bj2GNrB5kfKOeepWjLnoijQi1I67TICAz6JYZhRG3eoHvjD5ahaZIDfWxW14TwsNzPNexDhud/TQJQED8jrf1r3/qVa5heuAxpXwM6tuUPafxxZC9KQzVDY9GOXYMAxPHC6vXut5QAsGr6wvzugQM1OSsLhUgbxr2x6lszn9gvx/ZFqDFwmFf90qA9MavXnyEBWDE5O7f7vvmEjAw0OEMw/lD5t24+sV/RDYWoNQk4r7ziK4D8zTVI8wLRGMiKSpns+oSmLlyIhpgQTDhSMWzmE/sV01SMtNkHl7z8YxfAzIJlfUqlcgsJgJ+KoroXVKxFNtAX4w6WDrv5xAE9oRE4177ZPzRMXE5nkACAhmVPqhgtxjQVjZj5xH6Fb8pxzXziX0/ijpcIQCxmao5ptSyYgGOPDj1dDodMSZH31DS9ndT8VxC0UfhEY+TvWhdNw6i6Ja7CM+w9sHq+OLW2AgAPHsYExmQ4rNFz/1Zq1L283dJtHufosaaP6wt8JgWtz05Fe0k6hq6f56rMYp2I2rkYY/YVYUxzMcYdKH2kYl9f6bovur7A9VxETR6Gb8zG0LVz0brkKTTGhvWqGO0tAHDANxQCAMQCwCyx4IknZSqa3iYC6vxMZ1g/0xXapP8nZeBa1TzbTgm6Tm9G063UqHuUGqpHSanuKrVUr1JL9VB6XZcora+hnbYYbzMW4y1dkPkGa/X9q85mvkCbffYDQJ542vlNmX8ST+L/Mf4DgiprcMG+vEUAAAAASUVORK5CYII="/>
// <text fill="black" strokeWidth="1" x="30">
//       {nodeDatum.name}
//     </text>
//     {nodeDatum.attributes?.department && (
//       <text fill="black" x="20" dy="20" strokeWidth="1">
//         Department: {nodeDatum.attributes?.department}
//       </text>
//     )}
//   </g>
// );

const renderRectSvgNode = ({ nodeDatum, toggleNode }) => (
  <g>
    <foreignObject onClick={toggleNode} x="-85" y="-100" width="170" height="300" preserveAspectRatio="none" xlinkHref="data:image/png;base64,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">
      <MemberCard nodeDatum={nodeDatum} />
    </foreignObject>
  </g>
);

export default function FamilyTreeGraph() {
  return (
    // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
    <div id="treeWrapper" style={{ width: '119em', gender: 'male', height: '58em' }}>
      <Tree
        nodeSize={{ x: 200, y: 10 }}
        zoom={0.4}
        depthFactor={-300}
        separation={{ nonSiblings: 2, siblings: 1 }}
        translate={{ x: 1100, y: 900 }}
        orientation={"vertical"}
        renderCustomNodeElement={renderRectSvgNode}
        data={familyData}
      />
    </div>
  );
}
