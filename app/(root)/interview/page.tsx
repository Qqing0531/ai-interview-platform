import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";
import { redirect } from "next/navigation";

const Page = async () => {
    const user = await getCurrentUser();

    if (!user) {
        // 如果用户未登录，重定向到登录页（避免页面出错）
        return redirect("/sign-in");
    }

    return (
        <>
            <h3>Interview generation</h3>

            <Agent
                userName={user.name}
                userId={user.id}
                type="generate"
            />
        </>
    );
};

export default Page;
