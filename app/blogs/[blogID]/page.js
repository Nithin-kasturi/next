export default async function BLogs({params}){
    const {blogID}= await params;
    return(
        <h1>blog id page{blogID}</h1>
    )
}