const trimmedString = (string)=>{
    const length = 150;
    const tString = string.length > length ? string.substring(0, length) + "..." : string;
    return tString
}

export default trimmedString;