export default function Practice2() {
  const getTotalFee = (num: number): number => {
    const total = num * 1.1
    return total
  }
  const onclickPractice = () => {
    console.log(getTotalFee(1000))
  }

  return (
    <div className="mx-auto m-5 p-1 text-center">
      <p className="m-5 p-3">練習問題：返却値の型指定</p>
      <button
        onClick={onclickPractice}
        className=" py-2 px-4 text-white rounded-md bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
      >
        練習問題２を実行
      </button>
    </div>
  )
}
