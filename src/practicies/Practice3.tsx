export default function Practice3() {
  const getTotalFee = (num: number): number => {
    const total = num * 1.1
    return total
  }
  const onclickPractice = () => {
    let total: number = 0
    total = getTotalFee(1000)
    console.log(total)
  }

  return (
    <div className="mx-auto m-5 p-1 text-center">
      <p className="m-2 p-3">練習問題：変数の型指定</p>
      <button
        onClick={onclickPractice}
        className=" py-2 px-4 text-white rounded-md bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
      >
        練習問題３を実行
      </button>
    </div>
  )
}
