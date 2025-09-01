"use client"
import { FormControl, InputLabel, MenuItem, Select, TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";

const schema = yup.object().shape({
    fullName: yup.string().required("Full name is required ").min(2),
    phone: yup.string().required("Phone number is required").min(11),
    email: yup.string().email("Enter a vaild email"),
    apartment: yup.string().required("Apartment us required"),
    rentAmount: yup.number().required("Rent Amount is required"),
    dueDate: yup.date().required("Due date is required"),
    paymentStatus: yup.string().oneOf(["paid","unpaid"]).required("status is required"),
    note: yup.string().required("Notes is required"),
});

export default function () {
    const {handleSubmit,handleChange,handleBlur,touched,values,errors} = useFormik({
        initialValues : {
            fullName: "",
            phone: "",
            email: "",
            apartment: "",
            rentAmount: "",
            dueDate:"",
            paymentStatus: "",
            notes: "",
        },
        onSubmit: async(values,{resetForm})=>{
            alert("form submitted")
            console.log(`fullname: ${values.fullName} email: ${values.email} amount: ${values.rentAmount} status: ${values.paymentStatus}
                phone: ${values.phone}`)
                resetForm()
        },
        validationSchema :schema

    })
    return (
        <main className="min-h-screen max-w-3xl mx-auto my-10 px-6 py-8 bg-white shadow-lg rounded-xl">
            <h1 className="text-2xl font-semibold mb-6 text-center">Add Tenant</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/**full name and phine*/}
                <div>
                    <TextField
                    fullWidth
                    label="Full Name"
                    placeholder="Enter full name"
                    type="text"
                    value={values.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="fullName"/>
                    {touched.fullName && errors.fullName ?<span className="text-red-500 text-xs">{errors.fullName} </span> : null}
                </div>
                <div>
                    <TextField
                    fullWidth
                    type="tel"
                    label="Phone Number"
                    placeholder="+234 ..."
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="phone"
                    />
                    {touched.phone && errors.phone ?<span className="text-red-500 text-xs">{errors.phone} </span> : null}
                </div>
                {/**Email + apartment */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                    <TextField
                    fullWidth
                    label="Email"
                    placeholder="kelly@gmail.com"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="email"
                    />
                    {touched.email && errors.email ?<span className="text-red-500 text-xs">{errors.email} </span> : null}
                </div>

                <div>
                    <TextField 
                    fullWidth
                    label="Apartment/units"
                    placeholder="1 bedroom"
                    type="text"
                    value={values.apartment}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="apartment"
                    />
                    {touched.apartment && errors.apartment ?<span className="text-red-500 text-xs">{errors.apartment} </span> : null}
                </div>
            </div>
            {/*rent amount = due date*/}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                    <TextField
                    fullWidth
                    label="Rent Amount"
                    placeholder="Enter Rent Amount"
                    type="number"
                    value={values.rentAmount}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="rentAmount"
                    />
                    {touched.rentAmount && errors.rentAmount ?<span className="text-red-500 text-xs">{errors.rentAmount} </span> : null}
                </div>
                <div>
                    <TextField
                    fullWidth
                    label="Due date"
                    type="date"
                    InputLabelProps={{shrink:true}}
                    value={values.dueDate}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="dueDate"
                    />
                    {touched.dueDate && errors.dueDate ?<span className="text-red-500 text-xs">{errors.dueDate} </span> : null}
                </div>
                <div>
                    {/**payment status */}
                    
                    {/**Notes */}
                  
                    {/**sumbit button */}
                  
                </div>

            </div>
            <div>
                <FormControl fullWidth>
                        <InputLabel id="paymentStatus-label">Payment Status</InputLabel>
                        <Select
                            labeld="payment"
                            id="paymentStatus"
                            name="paymentStatus"
                            label="payment Status"
                            value={values.paymentStatus}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        >
                            <MenuItem value="paid">Paid</MenuItem>
                            <MenuItem value="unpaid">Unpaid</MenuItem>
                        </Select>
                        {touched.paymentStatus && errors.paymentStatus ?<span className="text-red-500 text-xs">{errors.paymentStatus} </span> : null}

                    </FormControl>
                      <div>
                        <TextField
                        fullWidth
                        multiline
                        
                        type="text"
                        label="Notes"
                        placeholder="Enter your notes"
                        id="notes"/>
                        {touched.notes && errors.notes ?<span className="text-red-500 text-xs">{errors.notes} </span> : null}
                    </div>
                <Button fullWidth variant="contained" type="submit" color="primary">
                            Add Tenant
                </Button>
            </div>

            </form>

        </main>
    )
}