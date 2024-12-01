import { SET_SUBSCRIPTION_STEP } from "@/store/constants";
import { SUBSCRIPTION_STEP } from "@/utils/constants";
import { CheckCircleOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";

const PaymentSuccess = () => {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch({
      type: SET_SUBSCRIPTION_STEP,
      payload: SUBSCRIPTION_STEP.CLOSED,
    })
  }

  return (
    <>
      <CheckCircleOutlined style={{ fontSize: '10rem', color: 'rgb(38, 151, 38)'}} />
      <p>Payment done successfully</p>
      <button onClick={handleClose}>Start using Curate</button>
    </>
  )
}

export default PaymentSuccess;