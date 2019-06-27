var fs = require("fs");
var path = require("path");

var data = [
    {
        "sigla": "LEIM",
        "nome": "Licenciatura em Engenharia Informática e Multimédia",
        "provas": [
            {
                "nome": "asdasd",
                "regime": "M23",
                "exames": [
                    {
                        "ano": "2019",
                        "prova": "https://www.isel.pt/media/uploads/tinymce/LEIM_ProvaM23_2019.pdf",
                        "prova_solucao": "https://www.isel.pt/media/uploads/tinymce/LEIM_ProvaM23_2019_Solucoes.pdf",
                        "prova_modelo": "https://www.isel.pt/media/uploads/tinymce/LEIMM23ProvaModelo2019.pdf",
                        "prova_modelo_solucao": "https://www.isel.pt/media/uploads/tinymce/LEIMM23PModelo2019solucao.pdf"
                    },
                    {
                        "ano": "2018",
                        "prova": "https://www.isel.pt/media/uploads/tinymce/ISEL_LEIM_Prova2018.pdf",
                        "prova_solucao": "https://www.isel.pt/media/uploads/tinymce/ISEL_LEIM_Prova2018_solucao.pdf",
                        "prova_modelo": "",
                        "prova_modelo_solucao": ""
                    },
                    {
                        "ano": "2017",
                        "prova": "https://www.isel.pt/media/uploads/tinymce/m23/M23_LEIM_Prova_2017.pdf",
                        "prova_solucao": "https://www.isel.pt/media/uploads/tinymce/m23/M23_LEIM_Prova_Solucao_2017.pdf",
                        "prova_modelo": "https://www.isel.pt/media/uploads/tinymce/m23/M23_LEIM_ProvaModelo_2017.pdf",
                        "prova_modelo_solucao": "https://www.isel.pt/media/uploads/tinymce/m23/M23_LEIM_ProvaModelo_Solucao_2017.pdf",
                    },
                    {
                        "ano": "2016",
                        "prova": "https://www.isel.pt/media/uploads/tinymce/m23/M23_LEC_Prova_2016.pdf",
                        "prova_solucao": "https://www.isel.pt/media/uploads/tinymce/m23/M23_LEC_Solucao2016.pdf",
                        "prova_modelo": "https://www.isel.pt/media/uploads/tinymce/m23/M23_LEIM_Prova_Modelo_2016.pdf",
                        "prova_modelo_solucao": "https://www.isel.pt/media/uploads/tinymce/m23/M23_LEIM_Solucao_Prova_Modelo_2016.pdf"
                    },
                    {
                        "ano": "2014",
                        "prova": "",
                        "prova_solucao": "",
                        "prova_modelo": "https://www.isel.pt/pinst/servicos/servacademicos/docs/M23/Prova_MODELO_M23_2014_LERCM.pdf",
                        "prova_modelo_solucao": ""
                    },
                    {
                        "ano": "2012",
                        "prova": "",
                        "prova_solucao": "",
                        "prova_modelo": "https://www.isel.pt/pinst/servicos/servacademicos/docs/M23/provas2012/ProvaModelo_LERCM_2012.pdf",
                        "prova_modelo_solucao": ""
                    }
                    
                ]
            },
            {
                "nome": "asdasd",
                "regime": "DET",
                "exames": [
                    {
                        "ano": "2019",
                        "prova": "https://www.isel.pt/media/uploads/tinymce/LEIM_ProvaM23_2019.pdf",
                        "prova_solucao": "https://www.isel.pt/media/uploads/tinymce/LEIM_ProvaM23_2019_Solucoes.pdf",
                        "prova_modelo": "https://www.isel.pt/media/uploads/tinymce/LEIMM23ProvaModelo2019.pdf",
                        "prova_modelo_solucao": "https://www.isel.pt/media/uploads/tinymce/LEIMM23PModelo2019solucao.pdf"
                    },
                    {
                        "ano": "2018",
                        "prova": "https://www.isel.pt/media/uploads/tinymce/ISEL_LEIM_Prova2018.pdf",
                        "prova_solucao": "https://www.isel.pt/media/uploads/tinymce/ISEL_LEIM_Prova2018_solucao.pdf",
                        "prova_modelo": "",
                        "prova_modelo_solucao": ""
                    },
                    {
                        "ano": "2017",
                        "prova": "",
                        "prova_solucao": "",
                        "prova_modelo": "https://www.isel.pt/media/uploads/tinymce/det/DET_LEIM_ProvaModelo_2017.pdf",
                        "prova_modelo_solucao": "https://www.isel.pt/media/uploads/tinymce/det/DET_LEIM_ProvaModelo_Solucao_2017.pdf",
                    },
                    {
                        "ano": "2016",
                        "prova": "",
                        "prova_solucao": "",
                        "prova_modelo": "https://www.isel.pt/media/uploads/tinymce/det/DET_LEIM_Prova_Modelo_2016.pdf",
                        "prova_modelo_solucao": "https://www.isel.pt/media/uploads/tinymce/det/DET_LEIM_Solucao_Prova_Modelo_2016.pdf"
                    },
                    {
                        "ano": "2015",
                        "prova": "",
                        "prova_solucao": "",
                        "prova_modelo": "http://arquivo.pt/wayback/20151012124431/https://www.isel.pt/media/uploads/tinymce/Prova_Modelo_DETS_2015_LEIM.pdf",
                        "prova_modelo_solucao": ""
                    }
                ]
            }
        ]
    },

    {
        "sigla": "LEIC",
        "nome": "Licenciatura em Engenharia Informática e Computadores",
        "provas": [


            {
                "nome": "asdasd",
                "regime": "M23",
                "exames": [
                    {
                        "ano": "2019",
                        "prova": "https://www.isel.pt/media/uploads/tinymce/LEIC_ProvaM23_2019.pdf",
                        "prova_solucao": "https://www.isel.pt/media/uploads/tinymce/LEIC_ProvaM23_2019_Solucoes.pdf",
                        "prova_modelo": "https://www.isel.pt/media/uploads/tinymce/LEICM23ProvaModelo2019.pdf",
                        "prova_modelo_solucao": "https://www.isel.pt/media/uploads/tinymce/LEICM23PModelo2019solucao.pdf"
                    },
                    {
                        "ano": "2018",
                        "prova": "https://www.isel.pt/media/uploads/tinymce/ISEL_LEIC_Prova2018.pdf",
                        "prova_solucao": "https://www.isel.pt/media/uploads/tinymce/ISEL_LEIC_Prova2018_solucao.pdf",
                        "prova_modelo": "",
                        "prova_modelo_solucao": ""
                    },
                    {
                        "ano": "2017",
                        "prova": "https://www.isel.pt/media/uploads/tinymce/m23/M23_LEIC_Prova_2017.pdf",
                        "prova_solucao": "https://www.isel.pt/media/uploads/tinymce/m23/M23_LEIC_Prova_Solucao_2017.pdf",
                        "prova_modelo": "https://www.isel.pt/media/uploads/tinymce/m23/M23_LEIC_ProvaModelo_2017.pdf",
                        "prova_modelo_solucao": "https://www.isel.pt/media/uploads/tinymce/m23/M23_LEIC_ProvaModelo_Solucao_2017.pdf",
                    },
                    {
                        "ano": "2016",
                        "prova": "https://www.isel.pt/media/uploads/tinymce/m23/M23_LEIC_Prova_2016.pdf",
                        "prova_solucao": "https://www.isel.pt/media/uploads/tinymce/m23/M23_LEIC_Solucao2016.pdf",
                        "prova_modelo": "https://www.isel.pt/media/uploads/tinymce/m23/M23_LEIC_Prova_Modelo_2016.pdf",
                        "prova_modelo_solucao": "https://www.isel.pt/media/uploads/tinymce/m23/M23_LEIC_Solucao_Prova_Modelo_2016.pdf"
                    },
                    {
                        "ano": "2014",
                        "prova": "",
                        "prova_solucao": "",
                        "prova_modelo": "https://www.isel.pt/pinst/servicos/servacademicos/docs/M23/Prova_MODELO_M23_2014_LEIC.pdf",
                        "prova_modelo_solucao": ""
                    },
                    {
                        "ano": "2012",
                        "prova": "",
                        "prova_solucao": "",
                        "prova_modelo": "https://www.isel.pt/pinst/servicos/servacademicos/docs/M23/provas2012/ProvaModelo_LEIC_2012.pdf",
                        "prova_modelo_solucao": ""
                    }
                ]
            },

            {
                "nome": "asdasd",
                "regime": "DET",
                "exames": [
                    {
                        "ano": "2019",
                        "prova": "https://www.isel.pt/media/uploads/tinymce/LEIC_ProvaM23_2019.pdf",
                        "prova_solucao": "https://www.isel.pt/media/uploads/tinymce/LEIC_ProvaM23_2019_Solucoes.pdf",
                        "prova_modelo": "https://www.isel.pt/media/uploads/tinymce/LEICM23ProvaModelo2019.pdf",
                        "prova_modelo_solucao": "https://www.isel.pt/media/uploads/tinymce/LEICM23PModelo2019solucao.pdf"
                    },
                    {
                        "ano": "2018",
                        "prova": "https://www.isel.pt/media/uploads/tinymce/ISEL_LEIC_Prova2018.pdf",
                        "prova_solucao": "https://www.isel.pt/media/uploads/tinymce/ISEL_LEIC_Prova2018_solucao.pdf",
                        "prova_modelo": "",
                        "prova_modelo_solucao": ""
                    },
                    {
                        "ano": "2017",
                        "prova": "https://www.isel.pt/media/uploads/tinymce/det/DET_LEIC_Prova_2017.pdf",
                        "prova_solucao": "https://www.isel.pt/media/uploads/tinymce/det/DET_LEIC_Prova_Solucao_2017.pdf",
                        "prova_modelo": "https://www.isel.pt/media/uploads/tinymce/det/DET_LEIC_ProvaModelo_2017.pdf",
                        "prova_modelo_solucao": "https://www.isel.pt/media/uploads/tinymce/det/DET_LEIC_ProvaModelo_Solucao_2017.pdf",
                    },
                    {
                        "ano": "2016",
                        "prova": "https://www.isel.pt/media/uploads/tinymce/det/DET_LEIC_Prova_2016.pdf",
                        "prova_solucao": "https://www.isel.pt/media/uploads/tinymce/det/DET_LEIC_Solucao2016.pdf",
                        "prova_modelo": "https://www.isel.pt/media/uploads/tinymce/det/DET_LEIC_Prova_Modelo_2016.pdf",
                        "prova_modelo_solucao": "https://www.isel.pt/media/uploads/tinymce/det/DET_LEIC_Solucao_Prova_Modelo_2016.pdf"
                    },
                    {
                        "ano": "2015",
                        "prova": "",
                        "prova_solucao": "",
                        "prova_modelo": "http://arquivo.pt/wayback/20151012124431/https://www.isel.pt/media/uploads/tinymce/Prova_Modelo_DETS_2015_LEIC.pdf",
                        "prova_modelo_solucao": ""
                    }
                ]
            }


        ]
    },

    {
        "sigla": "LEM",
        "nome": "Licenciatura em Engenharia Mecânica",
        "provas": [
         

            {
                "nome": "asdasd",
                "regime": "M23",
                "exames": [
                    {
                        "ano": "2019",
                        "prova": "https://www.isel.pt/media/uploads/tinymce/LEM_ProvaM23_2019.pdf",
                        "prova_solucao": "https://www.isel.pt/media/uploads/tinymce/LEM_ProvaM23_2019_Solucoes.pdf",
                        "prova_modelo": "https://www.isel.pt/media/uploads/tinymce/LEMM23ProvaModelo2019.pdf",
                        "prova_modelo_solucao": "https://www.isel.pt/media/uploads/tinymce/LEMM23PModelo2019solucao.pdf"
                    },
                    {
                        "ano": "2018",
                        "prova": "https://www.isel.pt/media/uploads/tinymce/ISEL_LEM_Prova2018.pdf",
                        "prova_solucao": "https://www.isel.pt/media/uploads/tinymce/ISEL_LEM_Prova2018_solucao.pdf",
                        "prova_modelo": "",
                        "prova_modelo_solucao": ""
                    },
                    {
                        "ano": "2017",
                        "prova": "https://www.isel.pt/media/uploads/tinymce/m23/M23_LEM_Prova_2017.pdf",
                        "prova_solucao": "https://www.isel.pt/media/uploads/tinymce/m23/M23_LEM_Prova_Solucao_2017.pdf",
                        "prova_modelo": "https://www.isel.pt/media/uploads/tinymce/m23/M23_LEM_ProvaModelo_2017.pdf",
                        "prova_modelo_solucao": "https://www.isel.pt/media/uploads/tinymce/m23/M23_LEM_ProvaModelo_Solucao_2017.pdf",
                    },
                    {
                        "ano": "2016",
                        "prova": "https://www.isel.pt/media/uploads/tinymce/m23/M23_LEM_Prova_2016.pdf",
                        "prova_solucao": "https://www.isel.pt/media/uploads/tinymce/m23/M23_LEM_Solucao2016.pdf",
                        "prova_modelo": "https://www.isel.pt/media/uploads/tinymce/m23/M23_LEM_Prova_Modelo_2016.pdf",
                        "prova_modelo_solucao": "https://www.isel.pt/media/uploads/tinymce/m23/M23_LEM_Solucao_Prova_Modelo_2016.pdf"
                    },
                    {
                        "ano": "2014",
                        "prova": "",
                        "prova_solucao": "",
                        "prova_modelo": "https://www.isel.pt/pinst/servicos/servacademicos/docs/M23/Prova_MODELO_M23_2014_LEM.pdf",
                        "prova_modelo_solucao": ""
                    },
                    {
                        "ano": "2012",
                        "prova": "",
                        "prova_solucao": "",
                        "prova_modelo": "https://www.isel.pt/pinst/servicos/servacademicos/docs/M23/provas2012/ProvaModelo_LEM_2012.pdf",
                        "prova_modelo_solucao": ""
                    }
                    
                ]
            },

            {
                "nome": "asdasd",
                "regime": "DET",
                "exames": [
                    {
                        "ano": "2019",
                        "prova": "https://www.isel.pt/media/uploads/tinymce/LEM_ProvaM23_2019.pdf",
                        "prova_solucao": "https://www.isel.pt/media/uploads/tinymce/LEM_ProvaM23_2019_Solucoes.pdf",
                        "prova_modelo": "https://www.isel.pt/media/uploads/tinymce/LEMM23ProvaModelo2019.pdf",
                        "prova_modelo_solucao": "https://www.isel.pt/media/uploads/tinymce/LEMM23PModelo2019solucao.pdf"
                    },
                    {
                        "ano": "2018",
                        "prova": "https://www.isel.pt/media/uploads/tinymce/ISEL_LEM_Prova2018.pdf",
                        "prova_solucao": "https://www.isel.pt/media/uploads/tinymce/ISEL_LEM_Prova2018_solucao.pdf",
                        "prova_modelo": "",
                        "prova_modelo_solucao": ""
                    },
                    {
                        "ano": "2017",
                        "prova": "https://www.isel.pt/media/uploads/tinymce/det/DET_LEM_Prova_2017.pdf",
                        "prova_solucao": "https://www.isel.pt/media/uploads/tinymce/det/DET_LEM_Prova_Solucao_2017.pdf",
                        "prova_modelo": "https://www.isel.pt/media/uploads/tinymce/det/DET_LEM_ProvaModelo_2017.pdf",
                        "prova_modelo_solucao": "https://www.isel.pt/media/uploads/tinymce/det/DET_LEM_ProvaModelo_Solucao_2017.pdf",
                    },
                    {
                        "ano": "2016",
                        "prova": "https://www.isel.pt/media/uploads/tinymce/det/DET_LEM_Prova_2016.pdf",
                        "prova_solucao": "https://www.isel.pt/media/uploads/tinymce/det/DET_LEM_Solucao2016.pdf",
                        "prova_modelo": "https://www.isel.pt/media/uploads/tinymce/det/DET_LEM_Prova_Modelo_2016.pdf",
                        "prova_modelo_solucao": "https://www.isel.pt/media/uploads/tinymce/det/DET_LEM_Solucao_Prova_Modelo_2016.pdf"
                    },
                    {
                        "ano": "2015",
                        "prova": "",
                        "prova_solucao": "",
                        "prova_modelo": "http://arquivo.pt/wayback/20151012124431/https://www.isel.pt/media/uploads/tinymce/Prova_Modelo_DETS_2015_LEM.pdf",
                        "prova_modelo_solucao": ""
                    }
                ]
            }


        ]
    },

    {
        "sigla": "LEE",
        "nome": "Licenciatura em Engenharia Eletrotécnica",
        "provas": [
           

            {
                "nome": "asdasd",
                "regime": "M23",
                "exames": [
                    {
                        "ano": "2019",
                        "prova": "https://www.isel.pt/media/uploads/tinymce/LEE_ProvaM23_2019.pdf",
                        "prova_solucao": "https://www.isel.pt/media/uploads/tinymce/LEE_ProvaM23_2019_Solucoes.pdf",
                        "prova_modelo": "https://www.isel.pt/media/uploads/tinymce/LEEM23ProvaModelo2019.pdf",
                        "prova_modelo_solucao": "https://www.isel.pt/media/uploads/tinymce/LEEM23PModelo2019solucao.pdf"
                    },
                    {
                        "ano": "2018",
                        "prova": "https://www.isel.pt/media/uploads/tinymce/ISEL_LEE_Prova2018.pdf",
                        "prova_solucao": "https://www.isel.pt/media/uploads/tinymce/ISEL_LEE_Prova2018_solucao.pdf",
                        "prova_modelo": "",
                        "prova_modelo_solucao": ""
                    },
                    {
                        "ano": "2017",
                        "prova": "https://www.isel.pt/media/uploads/tinymce/m23/M23_LEE_Prova_2017.pdf",
                        "prova_solucao": "https://www.isel.pt/media/uploads/tinymce/m23/M23_LEE_Prova_Solucao_2017.pdf",
                        "prova_modelo": "https://www.isel.pt/media/uploads/tinymce/m23/M23_LEE_ProvaModelo_2017.pdf",
                        "prova_modelo_solucao": "https://www.isel.pt/media/uploads/tinymce/m23/M23_LEE_ProvaModelo_Solucao_2017.pdf",
                    },
                    {
                        "ano": "2016",
                        "prova": "https://www.isel.pt/media/uploads/tinymce/m23/M23_LEE_Prova_2016.pdf",
                        "prova_solucao": "https://www.isel.pt/media/uploads/tinymce/m23/M23_LEE_Solucao2016.pdf",
                        "prova_modelo": "https://www.isel.pt/media/uploads/tinymce/m23/M23_LEE_Prova_Modelo_2016.pdf",
                        "prova_modelo_solucao": "https://www.isel.pt/media/uploads/tinymce/m23/M23_LEE_Solucao_Prova_Modelo_2016.pdf"
                    },
                    {
                        "ano": "2014",
                        "prova": "",
                        "prova_solucao": "",
                        "prova_modelo": "https://www.isel.pt/pinst/servicos/servacademicos/docs/M23/Prova_MODELO_M23_2014_LEE.pdf",
                        "prova_modelo_solucao": ""
                    },
                    {
                        "ano": "2012",
                        "prova": "",
                        "prova_solucao": "",
                        "prova_modelo": "https://www.isel.pt/pinst/servicos/servacademicos/docs/M23/provas2012/ProvaModelo_LEE_2012.pdf",
                        "prova_modelo_solucao": ""
                    }
                ]
            },

            {
                "nome": "asdasd",
                "regime": "DET",
                "exames": [
                    {
                        "ano": "2019",
                        "prova": "https://www.isel.pt/media/uploads/tinymce/LEE_ProvaM23_2019.pdf",
                        "prova_solucao": "https://www.isel.pt/media/uploads/tinymce/LEE_ProvaM23_2019_Solucoes.pdf",
                        "prova_modelo": "https://www.isel.pt/media/uploads/tinymce/LEEM23ProvaModelo2019.pdf",
                        "prova_modelo_solucao": "https://www.isel.pt/media/uploads/tinymce/LEEM23PModelo2019solucao.pdf"
                    },
                    {
                        "ano": "2018",
                        "prova": "https://www.isel.pt/media/uploads/tinymce/ISEL_LEE_Prova2018.pdf",
                        "prova_solucao": "https://www.isel.pt/media/uploads/tinymce/ISEL_LEE_Prova2018_solucao.pdf",
                        "prova_modelo": "",
                        "prova_modelo_solucao": ""
                    },
                    {
                        "ano": "2017",
                        "prova": "https://www.isel.pt/media/uploads/tinymce/det/DET_LEE_Prova_2017.pdf",
                        "prova_solucao": "https://www.isel.pt/media/uploads/tinymce/det/DET_LEE_Prova_Solucao_2017.pdf",
                        "prova_modelo": "https://www.isel.pt/media/uploads/tinymce/det/DET_LEE_ProvaModelo_2017.pdf",
                        "prova_modelo_solucao": "https://www.isel.pt/media/uploads/tinymce/det/DET_LEE_ProvaModelo_Solucao_2017.pdf",
                    },
                    {
                        "ano": "2016",
                        "prova": "https://www.isel.pt/media/uploads/tinymce/det/DET_LEE_Prova_2016.pdf",
                        "prova_solucao": "https://www.isel.pt/media/uploads/tinymce/det/DET_LEE_Solucao2016.pdf",
                        "prova_modelo": "https://www.isel.pt/media/uploads/tinymce/det/DET_LEE_Prova_Modelo_2016.pdf",
                        "prova_modelo_solucao": "https://www.isel.pt/media/uploads/tinymce/det/DET_LEE_Solucao_Prova_Modelo_2016.pdf"
                    },
                    {
                        "ano": "2014",
                        "prova": "",
                        "prova_solucao": "",
                        "prova_modelo": "https://www.isel.pt/pinst/servicos/servacademicos/docs/M23/Prova_MODELO_M23_2014_LEE.pdf",
                        "prova_modelo_solucao": ""
                    },
                    {
                        "ano": "2015",
                        "prova": "",
                        "prova_solucao": "",
                        "prova_modelo": "http://arquivo.pt/wayback/20151012124431/https://www.isel.pt/media/uploads/tinymce/Prova_Modelo_DETS_2015_LEE.pdf",
                        "prova_modelo_solucao": ""
                    }
                ]
            }


        ]
    }
];



data.forEach(function (el) {
    var string = "";
    string += "# " + el.nome + '\n\n';
    el.provas.forEach(function (prova) {
        string += "#### " + prova.regime + "\n\n";
        prova.exames.forEach(function (exame) {
            
            string += "- " + exame.ano + "\n\n";
            if (exame.prova != "") {
                string += "\t- [Prova](" + exame.prova + ")";
            } else {
                string += "\t- Prova";
            }

            if (exame.prova_solucao != "") {
                string += " [(Solução)](" + exame.prova_solucao + ")";
            } else {
                string += " (Solução)";
            }
            string +="\n\n"

            if (exame.prova_modelo != "") {
                string += "\t- [Prova Modelo](" + exame.prova_modelo + ")";
            } else {
                string += "\t- Prova Modelo";
            }
            if (exame.prova_modelo_solucao != "") {
                string += " [(Solução)](" + exame.prova_modelo_solucao + ")";
            } else {
                string += " (Solução) \n\n";
            }
            string +="\n\n"

        })
        string +="\n\n"
    })
    string +="\n\n"
    string+="###### Ficheiro gerado em " + (new Date()).toISOString();
    fs.writeFile("./exames-passados/" + el.sigla.toLocaleLowerCase() + ".md", string, () => {
        console.log(`Gerado ficheiro para ${el.sigla}@${(new Date()).toISOString()}`)
});
})
