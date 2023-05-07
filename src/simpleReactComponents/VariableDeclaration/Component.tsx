import AnotherChild from "../../components/AnotherChild";
import Child from "../../components/Child";

interface Props {
    children: React.ReactNode;
}

export const Name: React.FC<Props> = ({ children }) => (
    <>
        <Child />
        <AnotherChild />
        {children}
        <AnotherChild>
            <AnotherChild>
                <Child>
                    <AnotherChild>
                        <AnotherChild />
                    </AnotherChild>
                </Child>
            </AnotherChild>
        </AnotherChild>
    </>
);

export const Name2: React.FC<Props> = ({ children }) => (
    <AnotherChild>
        <AnotherChild>
            <Child>
                <AnotherChild>
                    <AnotherChild />
                </AnotherChild>
            </Child>
        </AnotherChild>
        <AnotherChild>
            <AnotherChild>
                <Child>
                    <AnotherChild>
                        <AnotherChild />
                    </AnotherChild>
                    <AnotherChild>
                        <AnotherChild>
                            <Child>
                                <AnotherChild>
                                    <AnotherChild />
                                </AnotherChild>
                            </Child>
                        </AnotherChild>
                    </AnotherChild>
                </Child>
            </AnotherChild>
        </AnotherChild>
    </AnotherChild>
);