import { FirstLevelMenuItem } from '@/interfaces/menu.interface';
import CoursesIcon from '../app/(site)/components/Menu/icons/Courses.svg';
import SevicesIcon from '../app/(site)/components/Menu/icons/Services.svg';
import BooksIcon from '../app/(site)/components/Menu/icons/Book.svg';
import ProductsIcon from '../app/(site)/components/Menu/icons/Products.svg';
import { TopLevelCategory } from '@/interfaces/page.interface';

export const firstLevelMenu: FirstLevelMenuItem[] = [
	{ route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
	{ route: 'services', name: 'Сервисы', icon: <SevicesIcon />, id: TopLevelCategory.Services },
	// { route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books },
	// { route: 'products', name: 'Продукты', icon: <ProductsIcon />, id: TopLevelCategory.Products },
];
