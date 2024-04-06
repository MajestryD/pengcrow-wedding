import React, { useState} from 'react';
import { db } from '../../../config/firebase';
import { addDoc, collection } from 'firebase/firestore';
import './rsvp.css'

function RSVP() {


    const [newAttendant, setNewAttendant] = useState({ email: '', confirmation: true, diet: [], allergies: [], additional: '', childList: [], adultList: [''] });
    const [badSubmit, setBadSubmit] = useState(false);
    const reservationsCollectionRef = collection(db, "reservations");


    // Handle adult list functions
    const handleAddInput = () => {
        if (newAttendant.adultList[newAttendant.adultList.length - 1] !== '') {
            setNewAttendant({ ...newAttendant, adultList: [...newAttendant.adultList, ''] });
        }

    };

    const handleChange = (event, index) => {
        let { value } = event.target;
        let onChangeValue = [...newAttendant.adultList];
        onChangeValue[index] = value;
        setNewAttendant({ ...newAttendant, adultList: [...onChangeValue] });
    };


    const handleDeleteInput = (index) => {
        const newArray = [...newAttendant.adultList];
        newArray.splice(index, 1);
        setNewAttendant({ ...newAttendant, adultList: newArray });
    };

    // Handle Children list functions
    const handleAddInputChild = () => {
        if (newAttendant.childList[newAttendant.childList.length - 1] !== '') {
            setNewAttendant({ ...newAttendant, childList: [...newAttendant.childList, ''] });
        };
    };

    const handleChangeChild = (event, index) => {
        let { value } = event.target;
        let onChangeValue = [...newAttendant.childList];
        onChangeValue[index] = value;
        setNewAttendant({ ...newAttendant, childList: [...onChangeValue] });
    };


    const handleDeleteInputChild = (index) => {
        const newArray = [...newAttendant.childList];
        newArray.splice(index, 1);
        setNewAttendant({ ...newAttendant, childList: newArray });
    };



    // For allergies
    const [allergy, setAllergy] = useState("");

    const handleAllergy = () => {
        if (newAttendant.allergies.includes(allergy)) {
            console.error("You are already allergic to this...Can't have a square of an allergy");
        } else {
            setNewAttendant({ ...newAttendant, allergies: [...newAttendant.allergies, allergy] });
            setAllergy("");
        }

    };

    const handleChangeAllergy = (event) => {
        setAllergy(event.target.value);
    };


    const handleDeleteAllergy = (index) => {
        const newArray = [...newAttendant.allergies];
        newArray.splice(index, 1);
        setNewAttendant({ ...newAttendant, allergies: newArray });
    };

    const handleEnterDuringAllergy = (e, index) => {
        if (e.key === 'Enter') {
            handleAllergy();
        } else {
            setAllergy(e.target.value);
        }
    }

    // For dietary restriction
    const [dietaryResitriction, setDietaryRestriction] = useState("");

    const handleDiet = () => {
        if (newAttendant.diet.includes(dietaryResitriction)) {
            console.log("Stop...get somehelp");
        } else {
            setNewAttendant({ ...newAttendant, diet: [...newAttendant.diet, dietaryResitriction] });
            setDietaryRestriction("");
        }
    };

    const handleChangeDiet = (event) => {
        setDietaryRestriction(event.target.value);
    };


    const handleDeleteDiet = (index) => {
        const newArray = [...newAttendant.diet];
        newArray.splice(index, 1);
        setNewAttendant({ ...newAttendant, diet: newArray });
    };

    const handleEnterDuringDiet = (e, index) => {
        if (e.key === 'Enter') {
            handleDiet();
        } else {
            setDietaryRestriction(e.target.value);
        }
    }
    const [finishSubmit,setFinishSubmit] = useState(false);
    const addAttendants = () => {
        const filteredAdultList = newAttendant.adultList.filter(adult => adult != null && adult !== false && adult !== "");
        const filteredChildrenList = newAttendant.childList.filter(adult => adult != null && adult !== false && adult !== "");

        if (newAttendant.email && filteredAdultList.length > 0) {
            addDoc(reservationsCollectionRef, { ...newAttendant, adultList: filteredAdultList, childList: filteredChildrenList })
                .then((data) => {
                    console.log(data);
                })
                .catch((err) => {
                    console.error(err);
                });
            setNewAttendant({ email: '', confirmation: true, diet: [], allergies: [], additional: '', childList: [], adultList: [] });
            setBadSubmit(false);
            setFinishSubmit(true);
        } else {
            setBadSubmit(true);
        }
    }

    const onChangeName = (data) => (e) => {

        const filterData = newAttendant;
        setNewAttendant({ ...filterData, [data]: e.target.value });
    }

    return (
        <div id="RSVP" className="RSVP">
            <div className='rsvpMessage'>
                <span className='Title'> Rsvp </span>
                <div className='KungFu'></div>
                <p className='RSVPFYI'><strong>We're so excited to celebrate with you!</strong><br/>
                        KINDLY RESPOND BY JUNE 30<sup>th</sup>, 2024</p>
                <div className='RSVPForm'>
                    <div className='GuestList'>
                        <label>Name (required)</label>
                        <span className="Error" style={{ display: !newAttendant.adultList[0] && badSubmit ? "inline" : "none" }}> Please add your name to the list </span>
                        <div className="container">
                            <div className='AdultGuestList'>

                                {newAttendant.adultList.length < 1 && (<button className="AddMember" onClick={handleAddInput}>Sigh...Click me!</button>)}

                                {newAttendant.adultList.map((item, index) => (

                                    <div className='GuestInput' key={index}>
                                        <label> Guest {index + 1}</label>
                                        <div className='NameInputBox' >
                                            <input
                                                name="name"
                                                type="text"
                                                value={item.name}
                                                onChange={(event) => handleChange(event, index)}
                                            />

                                            {newAttendant.adultList.length && (
                                                <button className="DeleteMember" onClick={() => handleDeleteInput(index)}>Delete</button>
                                            )}
                                        </div>


                                        {index === newAttendant.adultList.length - 1 && (
                                            <button className="AddMember" onClick={() => handleAddInput()}>Add Guest</button>
                                        )}
                                    </div>


                                ))}

                            </div>
                            <div className='ChildrenGuestList'>

                                {newAttendant.childList.length < 1 && (<button className="AddMember" onClick={handleAddInputChild}>Our kids would like to join!</button>)}

                                {newAttendant.childList.map((item, index) => (
                                    <div className='GuestInput' key={index}>
                                        <label> Child {index + 1}</label>
                                        <div className='NameInputBox'>
                                            <input
                                                name="name"
                                                type="text"
                                                value={item.name}
                                                onChange={(event) => handleChangeChild(event, index)}
                                            />
                                            {newAttendant.childList.length && (
                                                <button className="DeleteMember" onClick={() => handleDeleteInputChild(index)}>Delete</button>
                                            )}
                                        </div>
                                        {index === newAttendant.childList.length - 1 && (
                                            <button className="AddMember" onClick={() => handleAddInputChild()}>Add Child</button>
                                        )}
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>

                    <div className='FormElement'>
                        <label>Guest Email (required) </label>
                        <span className="Error" style={{ display: !newAttendant.email && badSubmit ? "inline" : "none" }}> Please enter an email </span>
                        <input title="Please Provide A Valid Email Address !" type="email" value={newAttendant.email} onChange={onChangeName('email')} /><br />
                    </div>

                    <div className='FormElement'>
                        <label>Will you be attending: </label>
                        <select value={newAttendant.confirmation} onChange={onChangeName('confirmation')}>
                            <option value="true"> Yes, I/We will be there</option>
                            <option value="false"> No, I/We can't make it </option>
                        </select><br />
                    </div>

                    <div className='FormElement'>

                        <div>
                            {newAttendant.diet.map((item, index) => (
                                <span className="DietTag" onClick={() => handleDeleteDiet(index)} key={index} >{item.toString()} </span>
                            ))}
                        </div>
                        <label>Dietary Request: </label>
                        <input
                            type="text"
                            value={dietaryResitriction}
                            onChange={handleChangeDiet}
                            onKeyDown={handleEnterDuringDiet}
                            placeholder='Halal, Vegetarian, etc...'
                        />
                        <button className="AddMember" onClick={handleDiet}> Add to list </button>
                    </div>


                    <div className='FormElement'>

                        <div>
                            {newAttendant.allergies.map((item, index) => (
                                <span className="DietTag" onClick={() => handleDeleteAllergy(index)} key={index} >{item.toString()} </span>
                            ))}
                        </div>

                        <label>Allergies: </label>
                        <input
                            type="text"
                            value={allergy}
                            onChange={handleChangeAllergy}
                            onKeyDown={handleEnterDuringAllergy}
                            placeholder='Kindly list out your allergies'
                        />
                        <button className="AddMember" onClick={handleAllergy}> Add allergen to list</button>

                    </div>
                    <div className='FormElement'>
                        <label>Anything else you'd like us to know?</label>
                        <textarea className='Additional' type="text" value={newAttendant.additional} onChange={onChangeName('additional')} />
                        <button className="SubmitForm" onClick={addAttendants}>Submit</button>
                    </div>

                    


                </div>
                {finishSubmit && (<div className='FinishSubmit'> <strong>Thank you for submitting your RSVP! </strong></div>)}
            </div>
        </div>
    );
}

export default RSVP;
