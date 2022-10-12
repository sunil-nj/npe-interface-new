import { useState, useEffect, useRef } from "react";
//import { FILE_THRESHOLD, ONE_MB } from "../../constants/constants";

// This file is customised hook for getting input values and returning handleSubmit, handleChange, handleBlur
const useForm = ({ initState, callback }) => {
  const [state, setState] = useState(initState);
  const [errors, setErrors] = useState({});
  const [isSubmited, setIsSubmited] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isSubmited) callback();
  }, [isSubmited]);                     

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState(() => ({
      ...state,
      [name]: value,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const { name: fieldName } = e.target;
    setIsSubmited(true);
  };

  // const handleResetCallBack = () => {
  //   setState(initState);
  //   inputRef.current.value = null;
  // };

  return {
    handleChange,
    handleSubmit,
    state,
    errors,
    inputRef,
  };
};

export default useForm;
