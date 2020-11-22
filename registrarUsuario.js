var aID = [],
    aNCDU = [],
    aTDU = [],
    aCEDU = [],
    aCDU = [],
    aPAG = [];

if(localStorage.getItem('ID_reg') !=null){
        aID = JSON.parse(localStorage.getItem('ID_reg'));
        aNCDU = JSON.parse(localStorage.getItem('NCDU_reg'));
        aTDU = JSON.parse(localStorage.getItem('TDU_reg'));
        aCEDU = JSON.parse(localStorage.getItem('CEDU_reg'));
        aCDU = JSON.parse(localStorage.getItem('CDU_reg'));
        aPAG = JSON.parse(localStorage.getItem('PAG_reg'));
}

var elementoBotonRegistrar = document.querySelector('#Bregistrar'); 

elementoBotonRegistrar.addEventListener('click', registrarUsuario);

function registrarUsuario(){
    var nID = document.querySelector('#txtID').value,
    nNCDU = document.querySelector('#txtNCDU').value,
    nTDU = document.querySelector('#txtTDU').value,
    nCEDU = document.querySelector('#txtCEDU').value,
    nCDU = document.querySelector('#txtCDU').value,
    nPAG = document.querySelector('#txtPAG').value;

    aID.push(nID);
    aNCDU.push(nNCDU);
    aTDU.push(nTDU);
    aCEDU.push(nCEDU);
    aCDU.push(nCDU);
    aPAG.push(nPAG);

    localStorage.setItem('ID_reg', JSON.stringify(aID));
    localStorage.setItem('NCDU_reg', JSON.stringify(aNCDU));
    localStorage.setItem('TDU_reg', JSON.stringify(aTDU));
    localStorage.setItem('CEDU_reg', JSON.stringify(aCEDU));
    localStorage.setItem('CDU_reg', JSON.stringify(aCDU));
    localStorage.setItem('PAG_reg', JSON.stringify(aPAG));

    llenarTabla();
}
