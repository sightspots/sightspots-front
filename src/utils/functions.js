export const imagesRandom = (imageList) => {
    return imageList[Math.floor(Math.random() * (imageList.length))]
}