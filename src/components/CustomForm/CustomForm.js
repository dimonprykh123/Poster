import React from "react";
import {Formik} from "formik";
import styles from "./CustomForm.module.scss"

const CustomForm = ({formName, formState, formValidator, children, submitFunction}) => {
    return (
        <div className={`${styles.form} listBackColor`}>
            <h1>{formName}</h1>
            <Formik
                initialValues={formState}
                validate={values => formValidator(values)}
                onSubmit={(values, {resetForm}) => submitFunction(values,resetForm)}
                validateOnChange={true}
                validateOnBlur={true}
            >
                {props => (
                    <form onSubmit={props.handleSubmit} onReset={props.handleReset}>
                        {
                            React.Children.map(children, (child, idx) => {
                                return React.cloneElement(child, {props, idx})
                            })
                        }
                        <div className={"btn-group"}>
                            <button className={"btn lightGreenBackColor greenTxtColor"} type="submit">Submit</button>
                            <button className={"btn lightRedBackColor redTxtColor"} type="reset">Reset</button>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default CustomForm