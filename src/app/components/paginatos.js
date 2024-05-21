'use client'
import { useRouter } from 'next/navigation'

export default function Pagination(props) {
    const min = 1
    const router = useRouter()

    const handleNext = () => {router.push(`/sales?page=${parseInt(props.page) + 1}`)}

    const handlePrev = () => {router.push(`/sales?page=${parseInt(props.page) - 1}`)}

    return (
        <div style={{marginTop:"15px",padding:'5px',maxWidth:'50vw',margin:'auto',display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
            {props.page > min && <p onClick={() => handlePrev()} className="paginationButton">Previous page</p>}
            <p style={{fontWeight:'bold'}}>Page {props.page}</p>
            <p onClick={() => handleNext()} className="paginationButton">Next page</p>
        </div>
    );
}