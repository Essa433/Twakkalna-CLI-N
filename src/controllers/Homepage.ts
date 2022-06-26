export function createDataPanel(datas: any[], newData: any) {

    const dataIndex = datas.findIndex((el: { id: any; }) => el.id === newData.id);
    if (dataIndex === -1) {
        datas.push(newData);
    } else {
        datas[dataIndex] = {
            ...datas[dataIndex],
            ...newData,
        };
    }
    return datas;
}