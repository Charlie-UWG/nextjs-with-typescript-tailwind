import Link from 'next/link'

export default function Page1() {
  return (
    <>
      <div class="flex justify-around my-5">
        <Link href="/">
          <a>Topページへ</a>
        </Link>
        <Link href="./HomePage">
          <a>HOMEページへ</a>
        </Link>
        <Link href="./Page2">
          <a>ページ２へ</a>
        </Link>
      </div>
      <div className=" border-none rounded-lg bg-gray-100 text-center p-3  w-5/12 mx-auto my-auto">
        ページ１だよー
      </div>
    </>
  )
}
