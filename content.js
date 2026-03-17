var todo=[
        {
            name:"SERIEROJA",
            abb:"Hematoinfeccioso:",
            labs:[
                {name:"HEMOGLOBINA",abb:"Hb"},
                {name:"LEUCOCITOS", abb:"LEU"},
            ]
        },
        {
            name:"SERIEROJAESPECIAL",
            abb:null,
            labs:[
                {name:"HEMOGLOBINA", abb:"HB"},
                {name:"HEMATOCRITO", abb:"HTO"},
                {name:"VOLUMENCORPUSCULARMEDIO",abb:"VCM"},
                {name:"HEMOGLOBINACORPUSCULARMEDIA",abb:"HCM"},
                {name:"AMPLITUDDEDISTRIBUCIONERITROCITARIA",abb:"ADE"},
                {name:"RETICULOCITOS#",abb:"RET"} 
            ]
        },
        {
            name:"SERIEBLANCA",
            abb:null,
            labs:[
                {name:"LEUCOCITOS", abb:"LEU"},
                {name:"NEUTROFILOS#", abb:"NEU"},
                {name:"LINFOCITOS#", abb:"LINF"},
                {name:"MONOCITOS#", abb:"MONO"},
                {name:"EOSINOFILOS#", abb:"EOS"}
            ]
        },
        {
            name:"SERIEPLAQUETARIA",
            abb:null,
            labs:[
                {name:"PLAQUETAS", abb:"PLTS"}
            ]
        },
        {
            name:"PRUEBASDEFUNCIONAMIENTOHEPATICO",
            abb:"Química Hepática:",
            labs:[
                {name:"ALBUMINA",abb:"ALB"},
                {name:"BILIRRUBINATOTAL",abb:"BT"},
                {name:"BILIRRUBINADIRECTA",abb:"BD"},
                {name:"BILIRRUBINAINDIRECTA",abb:"BI"},
                {name:"ALANINOAMINOTRANSFERASAALT",abb:"ALT"},
                {name:"ASPARTATOAMINOTRANSFERASAAST",abb:"AST"},
                {name:"FOSFATASAALCALINA",abb:"FA"},
                {name:"PROTEINASTOTALESENSUERO",abb:"PT"},
                {name:"GLOBULINAS",abb:"GB"},
                {name:"GAMMAGLUTAMILTRANSFERASAGGT",abb:"GGT"}
            ]
        },
        {
            name:"ESTUDIO DEL ESTADO DEL HIERRO",
            abb:"Perfil de hierro:",
            labs:[
                {name:"HIERROSERICO",abb:"FE"},
                {name:"CAPACIDADINSATURADADEFIJACION",abb:"CAPI"},
                {name:"CAPACIDADTOTALDEFIJACION",abb:"CAPT"},
                {name:"INDICEDESATURACIONDETRANSFERRINA",abb:"IT"},
            ]
        },
        {
            name:"PERFILDELIPIDOS",
            abb:"Perfil de lípidos:",
            labs:[
                {name:"COLESTEROLTOTAL",abb:"CT"},
                {name:"COLESTEROLLDLMEDIDO",abb:"LDL"},
                {name:"COLESTEROLHDL",abb:"HDL"},
                {name:"TRIGLICERIDOS",abb:"TAG"},
            ]
        },
        {
            name:"QUIMICASANGUINEADE3ELEMENTOS",
            abb:"Química sanguínea:",
            labs:[
                {name:"GLUCOSA", abb:"GLU"},
                {name:"NITROGENOUREICO",abb:"BUN"},
                {name:"UREA", abb:"UREA"},
                {name:"CREATININA", abb:"CREAT"}
            ]
        },
        {
            name:"PRUEBADETOLERANCIAALAGUCOSA2HORAS",
            abb:"Tolerancia oral a la glucosa 2 horas",
            labs:[
                {name:"GLUCOSA",abb:"GLU INICIAL"},
                {name:"GLUCOSA12OMIN",abb:"GLU 2 HORAS"}
            ]
                },
        {
            name:"ELECTROLITOSSERICOS",
            abb:"Electrolitos séricos:",
            labs:[
                {name:"SODIO", abb:"NA"},
                {name:"POTASIO",abb:"K"},
                {name:"CLORO", abb:"CL"}
            ]
        },
        {
            name:"Pruebassinagrupar",
            abb:"Química complementaria:",
            labs:[
                {name:"CALCIO", abb:"CA"},
                {name:"FOSFORO",abb:"P"},
                {name:"MAGNESIO", abb:"MG"},
                {name:"PROTEINACREACTIVAULTRASENSIBLE", abb:"PCR"},
                {name:"DESHIDROGENASALACTICA", abb:"DHL"},
                {name:"ACIDOURICO",abb:"AU"},
                {name:"CISTATINAC",abb:"CISTATINA"},
                {name:"FERRITINA",abb:"FERRIT"},
                {name:"CREATINFOSFOQUINASA(CPK)",abb:"CPK"}
            ]
        },
        {
            name:"Pruebassinagrupar",
            abb:"Biomarcadores y vitaminas:",
            labs:[
                {name:"TROPONINAIALTASENSIBILIDAD", abb:"TNI"},
                {name:"PEPTIDONATRIURETICOCEREBRAL", abb:"BNP"},
                {name:"ACIDOFOLICO", abb:"B9"},
                {name:"VITAMINAB12",abb:"B12"},
                {name:"ANTIGENOPROSTATICOESPECIFICOPSA",abb:"APE"}
            ]
        },
        {
            name:"Pruebassinagrupar",
            abb:null,
            labs:[
                {name:"VITAMINADHIDROXI",abb:"VITAMINAD"},
            ]
        },
        {
            name:"Pruebassinagrupar",
            abb:null,
            labs:[
                {name:"PEPTIDONATRIURETICOCEREBRALBNP", abb:"BNP"},
            ]
        },
        {
            name:"HEMOGLOBINAGLICOSILADA",
            abb:null,
            labs:[
                {name:"HEMOGLOBINAGLICOSILADAHBA1C",abb:"HBA1C"}
            ]
        },
        {
            name:"PRUEBAINMUNOQUIMICAFECAL",
            abb:null,
            labs:[
                {name:"PRUEBAINMUNOQUIMICAFECALFIT",abb:"FIT"}
            ]
        },
        {
            name:"Pruebassinagrupar",
            abb:null,
            labs:[
                {name:"AMILASATOTAL", abb:"AMILASA"},
                {name:"LIPASA", abb:"LIPASA"},
                {name:"AMILASAPANCREATICA", abb:"AMILASAP"}
            ]
        },
        {
            name:"INDICEDECORRELACIONALBUMINA/CREATININA",
            abb:"Albuminuria al azar:",
            labs:[
                {name:"ALBUMINAENORINAALAZAR", abb:"ALBU"},
                {name:"CREATININAENORINAALAZAR",abb:"CREATU"},
                {name:"RELACIONALBUMINA/CREATININA",abb:"RAC"}
            ]
        },
        {
            name:"ELECTROLITOSENORINAALAZAR",
            abb:"Electrolitos urinarios",
            labs:[
                {name:"SODIOENORINAALAZAR", abb:"NAU"},
                {name:"POTASIOENORINAALAZAR",abb:"KU"},
                {name:"CLOROENORINAALAZAR",abb:"CLU"}
            ]
        },
        {
            name:"Pruebassinagrupar",
            abb:null,
            labs:[   
                {name:"CREATININAENORINAALAZAR",abb:"CREAU"},
                {name:"NITROGENOURIECOENORINAALAZAR",abb:"BUNU"}
            ]
        },
        {
            name:"Pruebassinagrupar",
            abb:null,
            labs:[
                {name:"VANCOMICINA", abb:"VANCO"},
                {name:"TACROLIMUS", abb:"TACRO"}
            ]
        },
        {
            name:"TIEMPOSDECOAGULACION(TPyTTP)",
            abb:"Tiempos de coagulación:",
            labs:[
                {name:"TIEMPODEPROTROMBINA", abb:"TP"},
                {name:"TIEMPODETROMBOPLASTINAPARCIAL", abb:"TTP"},
                {name:"INR", abb:"INR"},
                {name:"FIBRI",abb:"FIBRI"}
            ]
        },
        {
            name:"DIMEROD",
            abb:null,
            labs:[
                {name:"DIMEROD",abb:"DD"}
            ]
        },
        {
            name:"PRUEBASSINAGRUPAR",
            abb:null,
            labs:[
                {name:"TROPONINAIDEALTASENSIBILIDADHS-TNI",abb:"TNI"}
            ]
        },
        {
            name:"PERFILDEHEPATITISCRONICA",
            abb:null,
            labs:[
                {name:"HEPATITISBCORETORAL",abb:"CORE"},
                {name:"HEPATITISBACSANTIANTIGENOS",abb:"ACS"},
                {name:"HEPATITISBANTIGENOS",abb:"AGS"},
                {name:"HEPATITISCACSTOTALES",abb:"VHC"}
            ]
        },
        {
            name:"GASOMETRÍAARTERIAL",
            abb:"Gaso Arterial:",
            labs:[
                {name:"PH", abb:"PH"},
                {name:"PO2", abb:"PO2"},
                {name:"FIO2",abb:"FIO2"},
                {name:"PCO2", abb:"PCO2"},
                {name:"ANIONGAP", abb:"AG"},
                {name:"OSMOLARIDAD", abb:"OSM"},
                {name:"BICARBONATO", abb:"HCO3"},
                {name:"LACTATO", abb:"LAC"},
                {name:"HEMOGLOBINA",abb:"HB"},
                {name:"CALCIOIONIZADO",abb:"CAIO"},
                {name:"SATURACIONDEO2", abb:"SAT"}
            ]
        },
        {
            name:"GASOMETRÍAVENOSA",
            abb:"Gaso Venosa:",
            labs:[
                {name:"PH", abb:"PH"},
                {name:"PO2", abb:"PO2"},
                {name:"FIO2",abb:"FIO2"},
                {name:"PCO2", abb:"PCO2"},
                {name:"ANIONGAP", abb:"AG"},
                {name:"BICARBONATO", abb:"HCO3"},
                {name:"LACTATO", abb:"LAC"},
                {name:"OSMOLARIDAD", abb:"OSM"},
                {name:"SATURACIONDEO2", abb:"SAT"},
                {name:"CALCIOIONIZADO",abb:"CAIO"},
                {name:"HEMOGLOBINA",abb:"HB"}
            ]
        },
        {
            name:"PERFILTIROIDEO",
            abb:"Perfil tiroideo:",
            labs:[
                {name:"T4LIBRE", abb:"T4L"},
                {name:"T4TOTAL",abb:"T4T"},
                {name:"T3TOTAL", abb:"T3T"},
                {name:"HORMONAESTIMULANTEDETIROIDES", abb:"TSH"},
                {name:"T3CAPTACION",abb:"T3 CAPT"},
                {name:"TIROGLOBULINA(Tg)", abb:"TIROGLOB"}
            ]
        }
    ];
    
    
    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {
            let string="";
            for(let i=0;i<todo.length;i++){
                //eachlabpage
                let page=todo[i];
                let labpagename=page.name;
                let labpageabb=page.abb;
                let tables=getTables(labpagename);
                if(labpageabb!=null && tables!=null){
                    string=string+labpageabb+" ";
                }
                let labs=page.labs;
                for(let j=0;j<labs.length;j++){
                    if(getTables(labpagename)!=null){
                        if(tables.length>1){
                            for(let k=0;k<tables.length;k++){
                                string=string+getNameResult(labs[j],tables[k])+" ";
                            }
                        }
                        else{
                            string=string+getNameResult(labs[j],tables[0])+" ";
                        }
                    }
    
                }
            }
            texttoclipboard(string);
        }
    );
    function getTables(tablename){
        //la tablename está en un span
        let tables=new Array();
        let spans=document.getElementsByTagName("span");
        for(let i=0;i<spans.length;i++){
            let span=spans[i];
            if(span.innerHTML.toLowerCase().replace(/\s+/g, '')==tablename.toLowerCase().replace(/\s+/g, '')){
                //el elemento de arriba es una div
                if(span.parentNode.tagName!="DIV"){
                    table=span.parentNode.nextSibling;
                }else{
                    table=table=span.nextSibling;
                }
                if(table.tagName!=null){
                    tables.push(table);
                }
            }
        }
        if(tables.length==0){
            return null;
        }
        return tables;
    }
    function getNameResult(object,table) {
        let nameofvalue=object.name;
        let allspans=table.getElementsByTagName("span");
        let i;
        for(i=0;i<allspans.length;i++){
            let spanelement=allspans[i];
            let string=spanelement.innerHTML;
            let result;
            if(string.toLowerCase().replace(/\s+/g, '').replace(/[^a-zA-Z ]/g, "")===nameofvalue.toLowerCase().replace(/\s+/g, '').replace(/[^a-zA-Z ]/g, "")){
                let tr=spanelement.parentNode.parentNode.parentNode;
                let alltds=tr.getElementsByTagName("td");
                let spans=alltds[1].getElementsByTagName("span");
                for(let j=0;j<spans.length;j++){
                    let span=spans[j];
                    if(span.textContent.replace(/\s+/g, '').length<7){
                        result=span.textContent.replace(/\s+/g, '');
                        break;
                    }
                }
                let nameresultpair=object.abb+" "+result;
                return nameresultpair;
            }
        }
        return "";
    }
    
    
    function sayhi(){
        getAllData();
    }
    function getAllData(){
        //id de la tabla
    
        var array="holita";
    
        //encontrar las  columnas que tienen la información del parametro y el valor
    
        //iterar por las columnas poniendo en el array el parámetro y el valor
    
        //parsear una string con ese array
        texttoclipboard(parseString(array));
    
        //copiar al clipboard esa string
    }
    
    function parseString(array){
        return array;
    }
    function texttoclipboard(text){
        document.addEventListener('copy', function(e){
            e.clipboardData.setData('text/plain', text);
            e.preventDefault(); // default behaviour is to copy any selected text
        });
        document.execCommand("copy");
        document.removeEventListener("copy");
    }
    