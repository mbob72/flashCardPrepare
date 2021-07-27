async function getDD(startNum) {
    const res = await fetch('https://localhost:3500?start=' + startNum).then(r => r.json())
    return {
        // pageSize: 'A4',
        pageMargins: [16, 40, 0, 0],
        noBorders: true,
        // pageOrientation: 'portrait',
        content: [
            {
                style: 'small',
                table: {
                    widths: [133, 133, 133, 133],
                    heights: 70,
                    body: res
                }
            }],
        styles: {
            small: {
                fontSize: 11,
                lineHeight: 0.67,
                bold: false,
                margin: [0, 0, 0, 0],
                alignment: 'center',
                font: 'Times'
            }
        }
    }
}

export { getDD }
