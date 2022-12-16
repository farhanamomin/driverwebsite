import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import { TextField } from '@mui/material';
import { TextareaAutosize } from '@material-ui/core';
import { Box } from '@mui/system';
import { BsFillMicFill } from 'react-icons/bs';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
//import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
    const [name, setName] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [msg, setMsg] = useState();
    const [from, setFrom] = useState(new Date);
    const [to, setTo] = useState(new Date);
    const sam="";


    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }


    function handleChange(event) {
        // console.log(event.target.value);
        setName(event.target.value)
        
        console.log(name)
    }
    function phoneHandleChange(event) {
        // console.log(event.target.value);
        setPhoneNumber(event.target.value)
        console.log(phoneNumber)
    }
    function msgHandleChange(event) {
        // console.log(event.target.value);
        setMsg(event.target.value)
        console.log(msg)
    }




    const onSubmit = (e) => {
        e.preventDefault();
        let url = `https://web.whatsapp.com/send?phone=${+919886387771}`;
        url += `&text=${encodeURI("Name->" + name + "\n" 
        + "Phone Number->" + phoneNumber + "\n " + 
        "Message->" + msg +"\n"+"From-> " +from+
        "\n"+"To-> "+to)}&app_absent=0`;

        if ((name==" ")||(phoneNumber==(" ")||from==" "||(to==" "))) {
            toast.error('Payment Failed',{
                position:toast.POSITION.TOP_CENTER
              });
      
           
            return;
        } else if ((!name==" ")&&(!phoneNumber==" ")) {
            window.open(url);
        }else if(!name==" "){
          
            toast.error('Phone field is empty',{
                position:toast.POSITION.TOP_CENTER
              });

        } 
        else if(!phoneNumber==" "){
          
            toast.error('Name field is empty',{
                position:toast.POSITION.TOP_CENTER
              });
            }else {
            toast.error('Field are empty',{
                position:toast.POSITION.TOP_CENTER
              });
             
      
           
            

        }
    };
    return (
        <>
            <Header />
            <div style={{ width: '100%' }}>
                <Box
                    sx={{
                        display: 'flex',

                        p: 1,
                        m: 1,
                        bgcolor: 'background.paper',
                        borderRadius: 1,
                        justifyContent: 'center',
                        marginTop: 10

                    }}
                >
                    <div>
                        <h3>
                            For Scheduling a Drive - Leave your Contact Details
                        </h3>

                    </div>



                </Box>
                <form onSubmit={onSubmit}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: {xs:'column',md:'row',sm:'row'},
                            p: 1,
                            m: 1,
                            bgcolor: 'background.paper',
                            borderRadius: 1,
                            justifyContent: 'center',
                            gap: 5
                        }}
                    >
                        <div>
                            <TextField
                                helperText="Please enter your name"
                                id="demo-helper-text-misaligned"
                                label="Name"
                                required={true}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <TextField
                                helperText="Please enter your number"
                                id="demo-helper-text-misaligned"
                                label="Phone Number"
                                required={true}
                                onChange={phoneHandleChange}
                            />

                        </div>



                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: {xs:'column',md:'row',sm:'row'},
                            p: 1,
                            m: 1,
                            bgcolor: 'background.paper',
                            borderRadius: 1,
                            justifyContent: 'center',
                            gap: 5
                        }}
                    >




                        <div>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker

                                    value={from}
                                    disablePast={true}

                                    onChange={(date) => {

                                        setFrom(date)



                                    }
                                    }
                                    label="From"




                                    inputFormat="YYYY-MM-DD"
                                    renderInput={(params) => <TextField sx={{ width: '26ch' }}{...params} />}
                                />
                            </LocalizationProvider>
                        </div>
                        <div>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    label="To"
                                    value={to}

                                    disablePast={true}
                                    onChange={(date) => {

                                        setTo(date)



                                    }
                                    }


                                    inputFormat="YYYY-MM-DD"

                                    renderInput={(params) => <TextField sx={{ width: '26ch' }}{...params} />}
                                />

                            </LocalizationProvider>
                        </div>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            p: 1,
                            m: 1,
                            bgcolor: 'background.paper',
                            borderRadius: 1,
                            justifyContent: 'center',
                           
                            

                        }}
                    >
                        <div><TextareaAutosize
                            aria-label="minimum height"
                            minRows={3}
                            placeholder="Message"
                            style={{ width: 400, height: 200 }}
                            defaultValue={transcript}
                            onChange={msgHandleChange}
                        /></div>



                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            p: 1,
                            m: 1,
                            bgcolor: 'background.paper',
                            borderRadius: 1,
                            justifyContent: 'center',
                        }}
                    >
                        <div className="text-center text-md-left">
                            <button onClick={onSubmit} style={{ backgroundColor: '#cab543', border: '#cab543', width: '100px', fontSize: '20px', borderRadius: '15px', color: 'white' }} >Send</button>
                        </div>
                        <div className="status"></div>

                    </Box>



                </form>
                <ToastContainer />
            </div>






        </>

    )
}

export default Contact