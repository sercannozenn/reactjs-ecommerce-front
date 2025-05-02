import { useState } from 'react';
import {Category} from "../../types/Category.ts";


interface Props {
    categories: Category[];
    selected: number[];
    toggle: (id: number) => void;
}

const RecursiveCategoryFilter = ({ categories, selected, toggle }: Props) => {
    return (
        <>
            {categories.map((cat) => (
                <CategoryItem key={cat.id} category={cat} selected={selected} toggle={toggle} />
            ))}
        </>
    );
};

const CategoryItem = ({
                          category,
                          selected,
                          toggle,
                      }: {
    category: Category;
    selected: number[];
    toggle: (id: number) => void;
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const hasChildren = category.children && category.children.length > 0;

    return (
        <>
            <div className="form-check filter-item">
                <input
                    type="checkbox"
                    name="categories"
                    className="form-check-input parent-category"
                    value={category.id}
                    id={`cat-${category.id}`}
                    data-id={category.id}
                    checked={selected.includes(category.id)}
                    onChange={() => toggle(category.id)}
                />
                <label htmlFor={`cat-${category.id}`}>{category.name}</label>

                {hasChildren && (
                    <i
                        className={`bi ${isOpen ? 'bi-chevron-down' : 'bi-chevron-right'}`}
                        style={{ cursor: 'pointer', marginLeft: 10 }}
                        onClick={() => setIsOpen(!isOpen)}
                    ></i>
                )}
            </div>

            {hasChildren && (
                <div
                    className="subCategories mx-3"
                    id={`subCategories-${category.id}`}
                    data-id={category.id}
                    style={{ display: isOpen ? 'block' : 'none' }}
                >
                    <RecursiveCategoryFilter
                        categories={category.children!}
                        selected={selected}
                        toggle={toggle}
                    />
                </div>
            )}
        </>
    );
};

export default RecursiveCategoryFilter;
