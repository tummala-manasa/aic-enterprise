import React from 'react';
// import { useDispatch} from 'react-redux';
import styled from 'styled-components';

// import { fetchBrandsAsync, selectBrands } from './brandsSlice';


const Container = styled.div`
  margin: 50px 15vw 100px 15vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
`;

const Brand = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #232162;
  border: 1px solid #CCC;
  padding: 0 15px;
  border-radius: 15px;
  text-align: center;
  font-weight: bold;
  font-size: 14px;
  min-width: 100px;
  min-height: 70px;
  &:hover {
    color: #F2F2F2;
    background-color: #232162;
    margin: -10px;
    height: 90px;
    font-size: 16px;
  }
`;

export const Brands = () => {
  // const dispatch = useDispatch();

  const brandsObj = {
    isLoading: false,
    brandList: ['3M', 'Abdos', 'Acme', 'AXIVA', 'Blue Star', 'CDH', 'Conda', 'Dupont', 'Difco', 'Erma', 'Eutech', 'Exmire', 'Thermo TPP', 'Invitrogen', 'Orion', 'Oxoid', 'Thermo chromatography', 'Thermo CCP', 'Thermo LPE', 'Fisher Scientific', 'Fisher Bio Reagents', 'Fisherbrand', 'Genaxy', 'HAMILTON', 'HIMEDIA', 'Honeywell', 'Kimberly-Clark', 'LOBA', 'MagGenome', 'Merck', 'Merck Biomonitoring', 'SIGMA-ALDRICH', 'Millipore', 'NEB', 'NICE', 'Nupore', 'Polylab', 'Qiagen', 'Reagecon', 'RIVIERA', 'Spectrochem', 'SRL', 'VELTEK', 'Waters', 'Whatman']
  };
  // const brandsObj = useSelector(selectBrands);
  
  // useEffect(() => {
  //   dispatch(fetchBrandsAsync());
  // }, []);

  return (
    <Container>
      {!brandsObj.isLoading && brandsObj.brandList.length > 30 ?
        brandsObj.brandList.map((curBrand, index) => <Brand href={`/product-list?brand=${curBrand}`} key={index}><span>{curBrand}</span></Brand>) : 
        null
      }
    </Container>
  )
}
