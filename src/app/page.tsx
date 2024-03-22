// app/page.tsx
import Header from "@/components/header";
import Content from "@/components/content";

export default function Page() {
  return (
      <div>
          <Header activeIndex={0} />
          <Content />
      </div>
  )
}