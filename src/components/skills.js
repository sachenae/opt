import React, { Component } from 'react';
import {DataTable, TableHeader } from 'react-mdl';


class Skills extends Component {

    render() {
        return (
            
            <div className='data-table'>
               
               <DataTable
               className='table'
                    shadow={10}
                    rows={[
                        {language: 'HTML5', rating: 90 + '%'},
                        {language: 'CSS3', rating: 80 + '%'},
                        {language: 'JavaScript', rating: 75 + '%'},
                        {language: 'ReactJS', rating: 70 + '%'},
                        {language: 'Redux', rating: 40 + '%'},
                        {language: 'React Native', rating: 40 + '%'},
                        {language: 'BootStrap', rating: 85 + '%'},
                    ]}
                >
                    <TableHeader name="language" ><h4>Frontend</h4></TableHeader>
                    <TableHeader numeric name="rating"></TableHeader>
                </DataTable>
                <DataTable
                 className='table'
                    shadow={10}
                    rows={[
                        {language: 'NodeJS+Express', rating: 70 + '%'},
                        {language: 'MongoDB', rating: 80 + '%'},
                        {language: 'MySQL', rating: 75 + '%'}
                    ]}
                >
                    <TableHeader name="language" ><h4>Backend</h4></TableHeader>
                    <TableHeader numeric name="rating"></TableHeader>
                </DataTable>
                <DataTable
                 className='table'
                    shadow={10}
                    rows={[
                        {language: 'Java', rating: 50 + '%'},
                        {language: 'C', rating: 60 + '%'},
                        {language: 'Android', rating: 20 + '%'}
                    ]}
                >
                    <TableHeader name="language" ><h4>Others</h4></TableHeader>
                    <TableHeader numeric name="rating"></TableHeader>
                </DataTable>
            </div>
        );
    }
}

export default Skills;