export async function fetchLrtDataByStationId(sid:number) {
    const data = await fetch(`
        https://rt.data.gov.hk/v1/transport/mtr/lrt/getSchedule?station_id=${sid}`, { cache: 'no-store' });


    return (data.status==200)?(data.json()):data.status;
}