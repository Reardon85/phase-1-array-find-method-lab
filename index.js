// code your solution here

function temp(item, index, array) {
    console.log(item, item.result);

    if(item.result === "W"){

        return true;
    }
    else {

        return false;
    }

}

function superbowlWin (record){

    const year = record.find(temp);
    if(year === undefined){
        return year;
    }
    return year.year;
}
