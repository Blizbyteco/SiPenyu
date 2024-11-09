
export function cleanColumnName(columnName: string) {
    return columnName.split("_").map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()).join(" ")
}



export function extractDataColumnName(data:  Record<string, string>[]) {
    if (data.length == 0) return []

    return {columns: Object.keys(data[0]), value: data}
}

