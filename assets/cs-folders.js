function printValue() {
    let initialValString = document.getElementById("takeValue").value;
    let initialVal = Number(initialValString);
    let folderValEnd = initialVal + 99;
    let folderTitle = "CS" + initialVal + " - CS" + folderValEnd;
    document.getElementById("folderDisplayPrint").innerHTML = folderTitle;

    let valA = initialVal + 9;
    let APrint = "CS" + initialVal + " - CS" + valA;
    document.getElementById("firstLineDisp").innerHTML = "CS" + initialVal + " - CS" + valA;

    let valBStart = valA + 1;
    let valBEnd = valA + 10;
    let BPrint = "CS" + valBStart + " - CS" + valBEnd;
    document.getElementById("secondLineDisp").innerHTML = BPrint;

    let valCStart = valBEnd + 1;
    let valCEnd = valBEnd + 10;
    let CPrint = "CS" + valCStart + " - CS" + valCEnd;
    document.getElementById("thirdLineDisp").innerHTML = CPrint;

    let valDStart = valCEnd + 1;
    let valDEnd = valCEnd + 10;
    let DPrint = "CS" + valDStart + " - CS" + valDEnd;
    document.getElementById("forthLineDisp").innerHTML = DPrint;

    let valEStart = valDEnd + 1;
    let valEEnd = valDEnd + 10;
    let EPrint = "CS" + valEStart + " - CS" + valEEnd;
    document.getElementById("fithLineDisp").innerHTML = EPrint;

    let valFStart = valEEnd + 1;
    let valFEnd = valEEnd + 10;
    let FPrint = "CS" + valFStart + " - CS" + valFEnd;
    document.getElementById("sixthLineDisp").innerHTML = FPrint;

    let valGStart = valFEnd + 1;
    let valGEnd = valFEnd + 10;
    let GPrint = "CS" + valGStart + " - CS" + valGEnd;
    document.getElementById("seventhLineDisp").innerHTML = GPrint;

    let valHStart = valGEnd + 1;
    let valHEnd = valGEnd + 10;
    let HPrint = "CS" + valHStart + " - CS" + valHEnd;
    document.getElementById("eighthLineDisp").innerHTML = HPrint;

    let valIStart = valHEnd + 1;
    let valIEnd = valHEnd + 10;
    let IPrint = "CS" + valIStart + " - CS" + valIEnd;
    document.getElementById("ninthLineDisp").innerHTML = IPrint;

    let valJStart = valIEnd + 1;
    let valJEnd = valIEnd + 10;
    let JPrint = "CS" + valJStart + " - CS" + valJEnd;
    document.getElementById("tenthLineDisp").innerHTML = JPrint;
}