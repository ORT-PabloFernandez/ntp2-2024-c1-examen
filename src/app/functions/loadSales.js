export default async function loadSales(options = {}) {//options = {pageSize,page}
    const URL = "https://salesbackend.azurewebsites.net/api/sales"
    const finalUrl = `${URL}?pageSize=${options.pageSize}&page=${options.page}`
    const res = await fetch(finalUrl)
    const data = await res.json()
    return data
}