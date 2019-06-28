var fs = require("fs");
var path = require("path");
var minify = require('html-minifier').minify;
const https = require('https');
var archiver = require('archiver');

var markdown = require('markdown-it')({html:true});

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
                        "prova_modelo_solucao": "https://www.isel.pt/media/uploads/tinymce/m23/M23_LEIM_ProvaModelo_Solucao_2017.pdf"
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
                        "prova_modelo_solucao": "https://www.isel.pt/media/uploads/tinymce/det/DET_LEIM_ProvaModelo_Solucao_2017.pdf"
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
                        "prova_modelo": "https://arquivo.pt/wayback/20151012124431/https://www.isel.pt/media/uploads/tinymce/Prova_Modelo_DETS_2015_LEIM.pdf",
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
                        "prova_modelo_solucao": "https://www.isel.pt/media/uploads/tinymce/m23/M23_LEIC_ProvaModelo_Solucao_2017.pdf"
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
                        "prova_modelo_solucao": "https://www.isel.pt/media/uploads/tinymce/det/DET_LEIC_ProvaModelo_Solucao_2017.pdf"
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
                        "prova_modelo": "https://arquivo.pt/wayback/20151012124431/https://www.isel.pt/media/uploads/tinymce/Prova_Modelo_DETS_2015_LEIC.pdf",
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
                        "prova_modelo_solucao": "https://www.isel.pt/media/uploads/tinymce/LEMM23PModelo2019solucao.pdf"                    },
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
                        "prova_modelo_solucao": "https://www.isel.pt/media/uploads/tinymce/m23/M23_LEM_ProvaModelo_Solucao_2017.pdf"
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
                        "prova_modelo_solucao": "https://www.isel.pt/media/uploads/tinymce/det/DET_LEM_ProvaModelo_Solucao_2017.pdf"
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
                        "prova_modelo": "https://arquivo.pt/wayback/20151012124431/https://www.isel.pt/media/uploads/tinymce/Prova_Modelo_DETS_2015_LEM.pdf",
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
                        "prova_modelo_solucao": "https://www.isel.pt/media/uploads/tinymce/m23/M23_LEE_ProvaModelo_Solucao_2017.pdf"
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
                        "prova_modelo_solucao": "https://www.isel.pt/media/uploads/tinymce/det/DET_LEE_ProvaModelo_Solucao_2017.pdf"
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
                        "prova_modelo": "https://arquivo.pt/wayback/20151012124431/https://www.isel.pt/media/uploads/tinymce/Prova_Modelo_DETS_2015_LEE.pdf",
                        "prova_modelo_solucao": ""
                    }
                ]
            }


        ]
    },
    {
        "sigla": "LEIRT",
        "nome": "Licenciatura em Engenharia Informática, Redes e Telecomunicações",
        "provas": [
            {
                "nome": "asdasd",
                "regime": "M23",
                "exames": [
                    {
                        "ano": "2019",
                        "prova": "https://www.isel.pt/media/uploads/tinymce/LEIRT_ProvaM23_2019.pdf",
                        "prova_solucao": "https://www.isel.pt/media/uploads/tinymce/LEIRT_ProvaM23_2019_Solucoes.pdf",
                        "prova_modelo": "https://www.isel.pt/media/uploads/tinymce/LEIRTM23ProvaModelo2019.pdf",
                        "prova_modelo_solucao": "https://www.isel.pt/media/uploads/tinymce/LEIRTM23PModelo2019solucao.pdf"
                    },
                    {
                        "ano": "2018",
                        "prova": "https://www.isel.pt/media/uploads/tinymce/ISEL_LEIRT_Prova2018.pdf",
                        "prova_solucao": "https://www.isel.pt/media/uploads/tinymce/ISEL_LEIRT_Prova2018_solucao.pdf",
                        "prova_modelo": "",
                        "prova_modelo_solucao": ""
                    },
                    {
                        "ano": "2017",
                        "prova": "https://www.isel.pt/media/uploads/tinymce/m23/M23_LEIRT_Prova_2017.pdf",
                        "prova_solucao": "",
                        "prova_modelo": "",
                        "prova_modelo_solucao": ""
                    },
        
                    {
                        "ano": "2012",
                        "prova": "",
                        "prova_solucao": "",
                        "prova_modelo": "https://www.isel.pt/pinst/servicos/servacademicos/docs/M23/provas2012/ProvaModelo_LEIRT_2012.pdf",
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
                        "prova": "https://www.isel.pt/media/uploads/tinymce/LEIRT_ProvaM23_2019.pdf",
                        "prova_solucao": "https://www.isel.pt/media/uploads/tinymce/LEIRT_ProvaM23_2019_Solucoes.pdf",
                        "prova_modelo": "https://www.isel.pt/media/uploads/tinymce/LEIRTM23ProvaModelo2019.pdf",
                        "prova_modelo_solucao": "https://www.isel.pt/media/uploads/tinymce/LEIRTM23PModelo2019solucao.pdf"
                    },
                    {
                        "ano": "2018",
                        "prova": "https://www.isel.pt/media/uploads/tinymce/ISEL_LEIRT_Prova2018.pdf",
                        "prova_solucao": "https://www.isel.pt/media/uploads/tinymce/ISEL_LEIRT_Prova2018_solucao.pdf",
                        "prova_modelo": "",
                        "prova_modelo_solucao": ""
                    }
                ]
            }


        ]
        },
    {
        "sigla": "LEQB",
        "nome": "[Novo] Licenciatura em Engenharia Química e Biológica",
        "provas": [


            {
                "nome": "asdasd",
                "regime": "M23",
                "exames": [
                    {
                        "ano": "2019",
                        "prova": "https://www.isel.pt/media/uploads/tinymce/LEQB_ProvaM23_2019.pdf",
                        "prova_solucao": "https://www.isel.pt/media/uploads/tinymce/LEQB_ProvaM23_2019_Solucoes.pdf",
                        "prova_modelo": "https://www.isel.pt/media/uploads/tinymce/LEQBM23ProvaModelo2019.pdf",
                        "prova_modelo_solucao": "https://www.isel.pt/media/uploads/tinymce/LEQBM23PModelo2019solucao.pdf"
                    },
                    {
                        "ano": "2018",
                        "prova": "https://www.isel.pt/media/uploads/tinymce/ISEL_LEQB_Prova2018.pdf",
                        "prova_solucao": "https://www.isel.pt/media/uploads/tinymce/ISEL_LEQB_Prova2018_solucao.pdf",
                        "prova_modelo": "",
                        "prova_modelo_solucao": ""
                    },
                    {
                        "ano": "2017",
                        "prova": "https://www.isel.pt/media/uploads/tinymce/m23/M23_LEQB_Prova_2017.pdf",
                        "prova_solucao": "https://www.isel.pt/media/uploads/tinymce/m23/M23_LEQB_Prova_Solucao_2017.pdf",
                        "prova_modelo": "https://www.isel.pt/media/uploads/tinymce/m23/M23_LEQB_ProvaModelo_2017.pdf",
                        "prova_modelo_solucao": "https://www.isel.pt/media/uploads/tinymce/m23/M23_LEQB_ProvaModelo_Solucao_2017.pdf"
                    },
                    {
                        "ano": "2016",
                        "prova": "https://www.isel.pt/media/uploads/tinymce/m23/M23_LEQB_Prova_2016.pdf",
                        "prova_solucao": "https://www.isel.pt/media/uploads/tinymce/m23/M23_LEQB_Solucao2016.pdf",
                        "prova_modelo": "https://www.isel.pt/media/uploads/tinymce/m23/M23_LEQB_Prova_Modelo_2016.pdf",
                        "prova_modelo_solucao": "https://www.isel.pt/media/uploads/tinymce/m23/M23_LEQB_Solucao_Prova_Modelo_2016.pdf"
                    }
                ]
            },

            {
                "nome": "asdasd",
                "regime": "DET",
                "exames": [
                    {
                        "ano": "2019",
                        "prova": "https://www.isel.pt/media/uploads/tinymce/LEQB_ProvaM23_2019.pdf",
                        "prova_solucao": "https://www.isel.pt/media/uploads/tinymce/LEQB_ProvaM23_2019_Solucoes.pdf",
                        "prova_modelo": "https://www.isel.pt/media/uploads/tinymce/LEQBM23ProvaModelo2019.pdf",
                        "prova_modelo_solucao": "https://www.isel.pt/media/uploads/tinymce/LEQBM23PModelo2019solucao.pdf"
                    },
                    {
                        "ano": "2018",
                        "prova": "https://www.isel.pt/media/uploads/tinymce/ISEL_LEQB_Prova2018.pdf",
                        "prova_solucao": "https://www.isel.pt/media/uploads/tinymce/ISEL_LEQB_Prova2018_solucao.pdf",
                        "prova_modelo": "",
                        "prova_modelo_solucao": ""
                    },
                    {
                        "ano": "2017",
                        "prova": "",
                        "prova_solucao": "",
                        "prova_modelo": "",
                        "prova_modelo_solucao": "https://www.isel.pt/media/uploads/tinymce/det/DET_LEQB_ProvaModelo_Solucao_2017.pdf"
                    },
                    {
                        "ano": "2016",
                        "prova": "",
                        "prova_solucao": "",
                        "prova_modelo": "https://www.isel.pt/media/uploads/tinymce/det/DET_LEQB_Prova_Modelo_2016.pdf",
                        "prova_modelo_solucao": "https://www.isel.pt/media/uploads/tinymce/det/DET_LEQB_Solucao_Prova_Modelo_2016.pdf"
                    },
                    {
                        "ano": "2015",
                        "prova": "",
                        "prova_solucao": "",
                        "prova_modelo": "https://arquivo.pt/wayback/20151012124431/https://www.isel.pt/media/uploads/tinymce/Prova_Modelo_DETS_2015_LEQB.pdf",
                        "prova_modelo_solucao": ""
                    }
                ]
            }


        ]
       }
];

var output = fs.createWriteStream('./exames.zip');
var archive = archiver('zip', {
    zlib: { level: 9 } // Sets the compression level.
});


output.on('close', function() {
    console.log(archive.pointer() + ' total bytes');
    console.log('archiver has been finalized and the output file descriptor has closed.');
});
    
archive.pipe(output);

data.forEach(function (el) {
    var string = "";
    string += "# " + el.nome + '\n\n';
    string += "<table><tr valign=\"top\">";
    string += "\n\n";
    el.provas.forEach(function (prova) {
        string += "<td>";
        string += "\n\n";
        
        string += "#### " + prova.regime + "\n\n";
        prova.exames.forEach(function (exame) {
            
            string += "- " + exame.ano + "\n\n";
            if (exame.prova != "") {
                download(exame.prova, "exames/"+prova.regime+"/"+el.sigla+"/",  `${el.sigla}_${exame.ano}_Prova`)
                string += "\t- [Prova](" + exame.prova + ")";
            } else {
                string += "\t- Prova";
            }

            if (exame.prova_solucao != "") {
            download(exame.prova_solucao,"exames/"+prova.regime+"/"+el.sigla+"/",  `${el.sigla}_${exame.ano}_Prova_Solucao`)
                string += " [(Solução)](" + exame.prova_solucao + ")";
            } else {
                string += " (Solução)";
            }
            string +="\n\n"

            if (exame.prova_modelo != "") {
                download(exame.prova_modelo,"exames/"+prova.regime+"/"+el.sigla+"/",  `${el.sigla}_${exame.ano}_ProvaModelo`)
                string += "\t- [Prova Modelo](" + exame.prova_modelo + ")";
            } else {
                string += "\t- Prova Modelo";
            }
            if (exame.prova_modelo_solucao != "") {
                download(exame.prova_modelo_solucao,"exames/"+prova.regime+"/"+el.sigla+"/",  `${el.sigla}_${exame.ano}_ProvaModelo_Solucao`)
                string += " [(Solução)](" + exame.prova_modelo_solucao + ")";
            } else {
                string += " (Solução) \n\n";
            }
            string +="\n\n"

        })
        string += "</td>";
        string += "\n\n";
       
    })
    string += "\n\n";
    string += "</tr></table>";
    string +="\n\n"
    string += "###### Ficheiro gerado em " + (new Date()).toISOString();
    
    fs.writeFile("./exames-passados/" + el.sigla.toLocaleLowerCase() + ".md", minify(markdown.render(string),{collapseWhitespace:true}), () => {
        console.log(`Gerado ficheiro para ${el.sigla}@${(new Date()).toISOString()}`)
});
})

fs.readFile("./sitemap-temp.xml", 'utf-8', (err, data) => {
    if (err) throw err;
    
    fs.writeFile("./sitemap.xml",  data.replace(/{{date}}/g, (new Date()).toISOString()), () => {});
    
})

function download(url, path, nome) {
    var fileName = url.split("/");
    fileName = path + fileName[fileName.length - 1];
    if (nome) {
            fileName =  path + nome + ".pdf";
    }
    
    if (!fs.existsSync(fileName)) {
        if (!fs.existsSync(path)) {
            let pathC = path.split("/");
            for (var dirIDX = 1; dirIDX < pathC.length; dirIDX++) {
                var dir = pathC.slice(0, dirIDX).join("/");
                if (!fs.existsSync(dir)) {
                    fs.mkdirSync(dir);
                }
            }
        }

        
        var file = fs.createWriteStream(fileName);
        https.get(url, function (response) {
            response.pipe(file);
            file.on('finish', function () {
                file.close();
            });
        });
    }
}

archive.directory('exames/', false);
archive.finalize();
