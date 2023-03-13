import React from 'react';
import { BreadcrumbList, Breadcrumbtitle } from './style-components/breadcrumb.style';
export interface BreadcrumbInterface { }

const Breadcrumb: React.FC<BreadcrumbInterface> = () => {
	return (
		<nav aria-label="breadcrumb">
			<BreadcrumbList className=" mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
				<li className=""><a className="opacity-5 text-dark" href="javascript:;">Pages</a></li>
				<li className="text-sm text-dark active" aria-current="page">Dashboard</li>
			</BreadcrumbList>
			<Breadcrumbtitle>Dashboard</Breadcrumbtitle>
		</nav>
	)
};

export default Breadcrumb;
