import React from 'react'
import { Button,Box, Stack } from "@chakra-ui/react"
import axios from "axios";
import { useState , useEffect} from 'react';
const Home = () => {



const [name, setname] = useState("");
const [email, setemail] = useState("");
const [phone, setphone] = useState("");

    const checkoutHandler = async (amount) => {
    //  const amount=3000;
        const { data: { key } } = await axios.get("http://www.localhost:4000/api/getkey")

        const { data: { order } } = await axios.post("http://localhost:4000/api/checkout", {
           amount,name,email,phone
        });
        localStorage.setItem('name',name);
        localStorage.setItem('email',email);
        localStorage.setItem('phone',phone);
        const options = {
            key,
            amount: order.amount,
            currency: "INR",
            name: "TEDX NITW",
            description: "Payment Gateway",
            image: "data:image/jpeg;base64,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",
            order_id: order.id,
            callback_url: "http://localhost:4000/api/paymentverification",
            prefill: {
                name: order.notes.name,
                email:order.notes.email,
                contact: order.notes.phone
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#121212"
            }
        };
        const razor = new window.Razorpay(options);
        razor.open();
    }

    return (
        <Box>

            <Stack h={"100vh"} alignItems="center" justifyContent="center" direction={[ "row","column"]}>


          <form >
        <input placeholder="name" onChange={(e) => setname(e.target.value)} />
        <input placeholder="email"  onChange={(e) => setemail(e.target.value)}/>
        <input placeholder="phone"  onChange={(e) => setphone(e.target.value)}/>
        <Button onClick={() => checkoutHandler(3000)}> Pay 3000</Button>
        </form>
            </Stack>
        </Box>
    )
}

export default Home