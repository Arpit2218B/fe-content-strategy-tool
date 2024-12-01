import { SET_SUBSCRIPTION_STEP } from "@/store/constants";
import { SUBSCRIPTION_STEP } from "@/utils/constants";
import { CloseCircleOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";

const PaymentFailure = () => {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch({
      type: SET_SUBSCRIPTION_STEP,
      payload: SUBSCRIPTION_STEP.NO_ACTIVE_SUBSCRIPTION,
    })
  }

  return (
    <>
      <CloseCircleOutlined style={{ fontSize: '10rem', color: 'red'}} />
      <p>Payment failed due to some error</p>
      <button onClick={handleClose}>Retry payment</button>
    </>
  )
}

export default PaymentFailure;