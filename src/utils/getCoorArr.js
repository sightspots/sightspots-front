const getCoorArr = (arr) => {
    let arrCoor = [];
    arr.forEach((location)=>{
        arrCoor.push(location.latLng);
    });
    return arrCoor;
}

export default getCoorArr;