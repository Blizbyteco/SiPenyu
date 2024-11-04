

export function extractDataColumnName(data:  Record<string, string>[]) {
    if (data.length == 0) return []

    return {columns: Object.keys(data[0]), value: data}
}

