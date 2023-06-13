import React from 'react'
import moment from 'moment';
import SectionTitle from '../../../../components/SectionTitle';
import usePaymentHistory from '../../../../hooks/usePaymentHistory';

function PaymentHistory() {
  const [paymentHistory] = usePaymentHistory();
  console.log(paymentHistory)
  const formatDateTime = (date) => {
    return moment(date).format('HH:mm:ss,  DD-MM-YYYY');
  };

  return (
    <>
     <SectionTitle heading={"My Payment History"}></SectionTitle>
      <div className="my-8">
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className='bg-base-300'>
              <th>Index</th>
              <th>Class Image</th>
              <th>Class Name</th>
              <th className='text-center'>Transaction Id</th>
              <th>Class Price</th>
              <th className='text-center'>Time & Date</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {

              paymentHistory?.map((paymentHistoryData, index) =>
                <tr key={paymentHistoryData._id} className='border-b-2 border-b-base-300'>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={paymentHistoryData.enrolledClassImage} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{paymentHistoryData.enrolledClassName}</td>
                  <td className='text-center'>{paymentHistoryData.transactionId}</td>
                  <td className='text-center font-semibold'>${paymentHistoryData.classPrice}</td>
                  <td className='text-center'>{formatDateTime(paymentHistoryData.date)}</td>
                </tr>)
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default PaymentHistory;