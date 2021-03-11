export default function Practice4() {
  const calcTotalFee = (num: number) => {
    const total = num * 1.1
    console.log(total)
  }
  const onclickPractice = () => calcTotalFee(1000)

  return (
    <div className="mx-auto m-5 p-1 text-center">
      <p className="m-2 p-3">練習問題：設定ファイルを触ってみる</p>
      <button
        onClick={onclickPractice}
        className=" py-2 px-4 text-white rounded-md bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
      >
        練習問題４を実行
      </button>
    </div>
  )
}
