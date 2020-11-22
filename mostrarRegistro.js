llenarTabla();

function llenarTabla(){
    var tbody = document.querySelector('#tblRegistro tbody');

    

    var aID = JSON.parse(localStorage.getItem('ID_reg')),
        aNCDU = JSON.parse(localStorage.getItem('NCDU_reg')),
        aTDU = JSON.parse(localStorage.getItem('TDU_reg')),
        aCEDU = JSON.parse(localStorage.getItem('CEDU_reg')),
        aCDU = JSON.parse(localStorage.getItem('CDU_reg')),
        aPAG = JSON.parse(localStorage.getItem('PAG_reg'));

    var nCantidadRegistros = aID.length;

    for(var i = 0; i < nCantidadRegistros; i++){

        var fila = document.createElement('tr');

        var celdaID=document.createElement('td'),
            celdaNCDU=document.createElement('td'),
            celdaTDU=document.createElement('td'),
            celdaCEDU=document.createElement('td'),
            celdaCDU=document.createElement('td'),
            celdaPAG=document.createElement('td');

        var nodoTextoID=document.createTextNode(aID[i]),
            nodoTextoNCDU=document.createTextNode(aNCDU[i]),
            nodoTextoTDU=document.createTextNode(aTDU[i]),
            nodoTextoCEDU=document.createTextNode(aCEDU[i]),
            nodoTextoCDU=document.createTextNode(aCDU[i]),
            nodoTextoPAG=document.createTextNode(aPAG[i]);

            celdaID.appendChild(nodoTextoID);
            celdaNCDU.appendChild(nodoTextoNCDU);
            celdaTDU.appendChild(nodoTextoTDU);
            celdaCEDU.appendChild(nodoTextoCEDU);
            celdaCDU.appendChild(nodoTextoCDU);
            celdaPAG.appendChild(nodoTextoPAG);

        fila.appendChild(celdaID);
        fila.appendChild(celdaNCDU);
        fila.appendChild(celdaTDU);
        fila.appendChild(celdaCEDU);
        fila.appendChild(celdaCDU);
        fila.appendChild(celdaPAG);

        tbody.appendChild(fila);
    }
}