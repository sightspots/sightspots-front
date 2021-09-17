const splitCoor = (string) => {
    let coordites = string.split(",");
    let coor = [Number(coordites[0]), Number(coordites[1])]
    return coor;
}

export default splitCoor;