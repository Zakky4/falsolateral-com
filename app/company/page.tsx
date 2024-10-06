import Image from "next/image";
import { getMembersList } from "@/app/_libs/microcms";
import { MEMBERS_LIST_LIMIT } from "../_constants";
import styles from "./page.module.css";

export default () => {
  return (
    <div>
      <p>
        株式会社ファルソラテラル（以下「当社」といいます。）は、令和6年10月7日をもって会社設立の登記を完了しましたので、会社法第911条及び第939条の規定に基づき、以下の通り公告いたします。
      </p>
      <h2>1. 商号</h2>
      <p>株式会社ファルソラテラル</p>

      <h2>2. 会社設立日</h2>
      <p>令和6年10月7日</p>

      <h2>3. 事業内容</h2>
      <ul>
        <li>ITを活用した業務効率化などに関するコンサルティング業務</li>
        <li>人材育成に関するコンサルティング業務</li>
        <li>パソコン教室の経営</li>
      </ul>

      <h2>4. 本店所在地</h2>
      <p>福岡県福岡市中央区天神2丁目2番12号T&Jビルディング</p>

      <h2>5. 代表取締役</h2>
      <p>尾崎 完信</p>

      <h2>6. 資本金</h2>
      <p>500,000円</p>

      <h2>7. 株式発行数</h2>
      <p>50株</p>

      <h2>8. 電子公告の掲載サイト</h2>
      <p>当社の公告は、以下のウェブサイトに掲載いたします。</p>
      <p>
        URL:{" "}
        <a href="https://falsolateral.com/company">
          https://falsolateral.com/company
        </a>
      </p>
      <p>以上</p>
      <p>
        令和6年10月7日
        <br />
        株式会社ファルソラテラル
        <br />
        代表取締役　尾崎 完信
      </p>
    </div>
  );
};

// export default async function Page() {
//   const data = await getMembersList({ limit: MEMBERS_LIST_LIMIT });
//   return (
//     <div className={styles.container}>
//       {data.contents.length === 0 ? (
//         <p className={styles.empty}>メンバーが登録されていません。</p>
//       ) : (
//         <ul>
//           {data.contents.map((member) => (
//             <li key={member.id} className={styles.list}>
//               <Image
//               src={member.image.url}
//               alt=""
//               width={member.image.width}
//               height={member.image.height}
//               className={styles.image}
//             />
//               <dl>
//                 <dt className={styles.name}>{member.name}</dt>
//                 <dd className={styles.position}>{member.position}</dd>
//                 <dd className={styles.profile}>{member.about}</dd>
//               </dl>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }
