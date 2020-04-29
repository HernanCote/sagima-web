import React from 'react';

import {
    Root,
    TableData,
    TableRoot,
    TableRow,
    TableHeader,
    DataLink,
} from './StyledComponents';

const ProjectList = ({
    className,
    projects,
}) => {
    return (
        <Root className={className}>
            {projects.map(project => (
                <TableRoot key={project.id}>
                    <TableRow>
                        <TableHeader>{project.projectName}</TableHeader>
                    </TableRow>

                    <>
                        {project.subprojects.map(subproject => (
                            <TableRow>
                                <TableData>
                                    <DataLink target="__blank" href={subproject.link}>
                                        {subproject.name}
                                    </DataLink>
                                </TableData>
                            </TableRow>
                        ))}
                    </>
                </TableRoot>
            ))
            }
        </Root>
    );
}

export default ProjectList;