def find_available_times(events, day_range):
    events.sort(key=lambda x: x['start'])
    available_times = [{'start': day_range['start'], 'end': events[0]['start']}]
    
    for i in range(1, len(events)):
        if events[i]['start'] > available_times[-1]['end']:
            available_times.append({'start': available_times[-1]['end'], 'end': events[i]['start']})
            
        if events[i]['end'] > available_times[-1]['end']:
            available_times[-1]['end'] = events[i]['end']
            
    if events[-1]['end'] < day_range['end']:
        available_times.append({'start': events[-1]['end'], 'end': day_range['end']})
        
    return available_times


