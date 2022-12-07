functiondocument.getElementById(); {
    var elements = new Array();
    for (var i = 0; i < arguments.length; i++) {
        var element = arguments[i];
        if (typeof element == 'string') element = document.getElementById(element);
        if (arguments.length == 1) return element;
        elements.push(element)
    }
    return elements
}

function hi() {
    document.getElementById('t1').style.display = 'none';
    document.getElementById('t2').style.display = 'none';
    document.getElementById('t3').style.display = 'none';
    document.getElementById('t4').style.display = 'none';
    document.getElementById('t5').style.display = 'none';
    document.getElementById('t6').style.display = 'none'
}

function uc1() { document.getElementById('t1').style.display = 'block' }

function uc2() { document.getElementById('t2').style.display = 'block' }

function uc3() { document.getElementById('t3').style.display = 'block' }

function uc4() { document.getElementById('t4').style.display = 'block' }

function uc5() { document.getElementById('t5').style.display = 'block' }

function uc6() { document.getElementById('t6').style.display = 'block' }

function len() {
    var from = document.getElementById('flength').value;
    var to = document.getElementById('tlength').value;
    var totext = document.getElementById('tlength').options[document.getElementById('tlength').selectedIndex].text;
    var ip = document.getElementById('lip').value;
    if (document.getElementById('lip').value == null || document.getElementById('lip').value.length == 0) document.getElementById('lop').value = 'Please enter No. of Units';
    else
        document.getElementById('lop').value = Math.round(ip * from / to * 100000) / 100000 + ' ' + totext
}

function area() {
    var from = document.getElementById('farea').value;
    var to = document.getElementById('tarea').value;
    var totext = document.getElementById('tarea').options[document.getElementById('tarea').selectedIndex].text;
    ip = document.getElementById('aip').value;
    if (document.getElementById('aip').value == null || document.getElementById('aip').value.length == 0) document.getElementById('aop').value = 'Please enter No. of Units';
    else
        document.getElementById('aop').value = Math.round(ip * from / to * 100000) / 100000 + ' ' + totext
}

function speed() {
    var from = document.getElementById('fspeed').value;
    var to = document.getElementById('tspeed').value;
    var totext = document.getElementById('tspeed').options[document.getElementById('tspeed').selectedIndex].text;
    var ip = document.getElementById('sip').value;
    if (document.getElementById('sip').value == null || document.getElementById('sip').value.length == 0) document.getElementById('sop').value = 'Please enter No. of Units';
    else
        document.getElementById('sop').value = Math.round(ip * from / to * 100000) / 100000 + ' ' + totext
}

function weight() {
    var from = document.getElementById('fweight').value;
    var to = document.getElementById('tweight').value;
    var ip = document.getElementById('wip').value;
    var totext = document.getElementById('tweight').options[document.getElementById('tweight').selectedIndex].text;
    if (document.getElementById('wip').value == null || document.getElementById('wip').value.length == 0) document.getElementById('wop').value = 'Please enter No. of Units';
    else
        document.getElementById('wop').value = Math.round(ip * from / to * 100000) / 100000 + ' ' + totext
}

function vol() {
    var from = document.getElementById('fvol').value;
    var to = document.getElementById('tvol').value;
    var ip = document.getElementById('vip').value;
    var totext = document.getElementById('tvol').options[document.getElementById('tvol').selectedIndex].text;
    if (document.getElementById('vip').value == null || document.getElementById('vip').value.length == 0) document.getElementById('vop').value = 'Please enter No. of Units';
    else
        document.getElementById('vop').value = Math.round(ip * from / to * 100000) / 100000 + ' ' + totext
}

function temp() {
    var from = document.getElementById('ftemp').value;
    var to = document.getElementById('ttemp').value;
    var ip = document.getElementById('tip').value;
    var totext = document.getElementById('ttemp').options[document.getElementById('ttemp').selectedIndex].text;
    if (document.getElementById('tip').value == null || document.getElementById('tip').value.length == 0) document.getElementById('top').value = 'Please enter No. of Units';
    else
    if (from == 1 && to == 1) document.getElementById('top').value = ip + ' ' + totext;
    if (from == 1 && to == 2) document.getElementById('top').value = ((ip * 9 / 5) + 32 * 1).toFixed(2) + ' ' + totext;
    if (from == 1 && to == 3) document.getElementById('top').value = (ip * 1 + 273.15 * 1).toFixed(2) + ' ' + totext;
    if (from == 2 && to == 1) document.getElementById('top').value = ((ip - 32) * 5 / 9).toFixed(2) + ' ' + totext;
    if (from == 2 && to == 2) document.getElementById('top').value = ip + ' ' + totext;
    if (from == 2 && to == 3) document.getElementById('top').value = (((ip - 32) * 5 / 9) + 273.15).toFixed(2) + ' ' + totext;
    if (from == 3 && to == 1) document.getElementById('top').value = (ip - 273.15).toFixed(2) + ' ' + totext;
    if (from == 3 && to == 2) document.getElementById('top').value = ((ip - 273.15) * 9 / 5 + 32 * 1).toFixed(2) + ' ' + totext;
    if (from == 3 && to == 3) document.getElementById('top').value = ip + ' ' + totext
}

function selunit() {
    if (document.getElementById('ut').value == '1') {
        hi();
        uc1();
        len()
    };
    if (document.getElementById('ut').value == '2') {
        hi();
        uc2();
        area()
    };
    if (document.getElementById('ut').value == '3') {
        hi();
        uc3();
        speed()
    };
    if (document.getElementById('ut').value == '4') {
        hi();
        uc4();
        weight()
    };
    if (document.getElementById('ut').value == '5') {
        hi();
        uc5();
        vol()
    };
    if (document.getElementById('ut').value == '6') {
        hi();
        uc6();
        temp()
    }
}
window.onload = function() {
    hi();
    uc1();
    len()
}
