import AnotherChild from "../../components/AnotherChild";
import Child from "../../components/Child";

interface Props {
    children: React.ReactNode;
}

export function Component({ children }: Props) {
    return <>
        <Child />
        <AnotherChild />
        {children}
        <AnotherChild>
            <AnotherChild />
        </AnotherChild>
    </>
}