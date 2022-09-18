import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useSearchParams } from "react-router-dom"
const PaymentSuccess = (order) => {

    const seachQuery = useSearchParams()[0]
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const phone = localStorage.getItem('phone');
    // console.log(localStorage.getItem('details'));
    const referenceNum = seachQuery.get("reference")
    return (
        <Box>
            <VStack h="100vh" justifyContent={"center"}>

                <Heading textTransform={"uppercase"}> Order Successfull</Heading>

                <Text>
                    Reference No. {referenceNum}
                    <br/>
                   Name : {name} <br/>
                   Email : {email} <br/>
                   Phone : {phone} <br/>
                    {/* {details.name} 
                    {details.email} 
                    {details.phone} */}
                    {/* {order.razorpay_payment_id} */}
                    {/* {order.amount} */}
                    
                </Text>

            </VStack>
        </Box>
    )
}

export default PaymentSuccess